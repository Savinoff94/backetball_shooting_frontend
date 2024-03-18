import {FriendActionButtonInfo} from './types/FriendBlockNewTypes';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import BasketballIcon from '../../../../commonComponents/BasketballIcon/BasketballIcon';
import ButtonStyled from '../../../../StyledComponents/ButtonStyled';


type FriendBlockProps = FriendBlockUserInfo & {buttonsInfosList: FriendActionButtonInfo[]} & {isLoading: boolean, isAlone:boolean}

export default function FriendBlock({simpleStats, login, id, buttonsInfosList, isLoading, isAlone }: FriendBlockProps): JSX.Element {

    return (

        <li data-isalone={isAlone} className='flex justify-between pb-1 pt-1 data-[isalone=false]:border-b data-[isalone=false]:border-purple-200'  key={id} id={id}>
            <a className='flex justify-evenly items-center w-2/3' href={'http://localhost:5000/api/charts/:'+id}>
                <div className='flex-col'>
                    <BasketballIcon/>
                    {/* <img alt='profile' src={friendBlockProps['imageSrc']}/> */}
                    <div className='flex font-sofia'>{login}</div>
                </div>
                <div className='flex font-sofia'>1pt: {simpleStats['freethrows']}%</div>
                <div className='flex font-sofia'>2pt: {simpleStats['twoPointers']}%</div>
                <div className='flex font-sofia'>3pt: {simpleStats['threePointers']}%</div>
            </a>
            <div className='flex gap-1 flex-col sm:flex-row items-center'>
            {
                buttonsInfosList.map((buttonInfo: FriendActionButtonInfo): JSX.Element => {

                    return (
                    <ButtonStyled
                        isPrimary={buttonInfo['isPrimary']}
                        text={buttonInfo['text']}
                        onClick={()=>(buttonInfo.action([id]))}
                        type="button"
                        isDisabled={isLoading}
                        key={buttonInfo['text'].split(' ').join('') + id}
                    />
                    )
                })
            }
            </div>
        </li>
    );
}