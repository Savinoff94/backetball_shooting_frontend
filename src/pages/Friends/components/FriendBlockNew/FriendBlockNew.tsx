import {FriendActionButtonInfo} from './types/FriendBlockNewTypes';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import BasketballIcon from '../../../../commonComponents/BasketballIcon/BasketballIcon';
import ButtonStyled from '../../../../StyledComponents/ButtonStyled';
import {AnimatedPlusIcon, AnimatedCrossIcon, AnimatedIconProps} from '../../../../commonComponents/SimpleIcons/SimpleIcons'



type FriendBlockProps = FriendBlockUserInfo & {buttonsInfosList: FriendActionButtonInfo[]} & {isLoading: boolean, isAlone:boolean}

export default function FriendBlock({simpleStats, login, id, buttonsInfosList, isLoading, isAlone }: FriendBlockProps): JSX.Element {

    return (

        <li data-isalone={isAlone} className='grid grid-cols-5 justify-between pb-1 pt-1 data-[isalone=false]:border-b data-[isalone=false]:border-black'  key={id} id={id}>
                <div className='flex flex-col items-center justify-center'>
                    <BasketballIcon/>
                    {/* <img alt='profile' src={friendBlockProps['imageSrc']}/> */}
                    <div className='flex mt-1 font-sofia'>{login}</div>
                </div>
                <div className='flex flex-col font-sofia items-center justify-center'><span>1pt: </span><span>{simpleStats['freethrows']}%</span></div>
                <div className='flex flex-col font-sofia items-center justify-center'><span>2pt: </span><span>{simpleStats['twoPointers']}%</span></div>
                <div className='flex flex-col font-sofia items-center justify-center'><span>3pt: </span><span>{simpleStats['threePointers']}%</span></div>
            <div className='flex gap-1 flex-col items-center justify-center'>
            {
                buttonsInfosList.map((buttonInfo: FriendActionButtonInfo): JSX.Element => {

                    const ButtonIcon = getButtonInnerContent(buttonInfo['text'])


                    return (
                    <ButtonStyled
                        isPrimary={buttonInfo['isPrimary'] ? 'primary' : 'secondary'}
                        onClick={()=>(buttonInfo.action([id]))}
                        type="button"
                        isDisabled={isLoading}
                        key={buttonInfo['text'].split(' ').join('') + id}
                    >
                        {
                            ButtonIcon ? <ButtonIcon isLoading={isLoading}/> : buttonInfo['text']
                        }
                    </ButtonStyled>
                    )
                })
            }
            </div>
        </li>
    );
}

function getButtonInnerContent(key: string): React.ComponentType<AnimatedIconProps> | null {

    const buttonIcons: Record<string, React.ComponentType<AnimatedIconProps>> = {
        "Approve"    : AnimatedPlusIcon,
        "Add"        : AnimatedPlusIcon,
        "Cancel"     : AnimatedCrossIcon,
        "Disapprove" : AnimatedCrossIcon,
        "Remove"     : AnimatedCrossIcon,
    }

    if(Object.keys(buttonIcons).includes(key)) {

        return buttonIcons[key];
    }

    return null;
}