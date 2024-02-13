import {FriendActionButtonInfo} from './types/FriendBlockNewTypes';
import {FriendBlockUserInfo} from '../../types/friendsTypes';



type FriendBlockProps = FriendBlockUserInfo & {buttonsInfosList: FriendActionButtonInfo[]} & {isLoading: boolean}

export default function FriendBlock(friendBlockProps: FriendBlockProps): JSX.Element {

    return (

        <li key={friendBlockProps['id']} id={friendBlockProps['id']}>
            <a href={'http://localhost:5000/api/charts/:'+friendBlockProps['id']}>
                <img alt='profile' src={friendBlockProps['imageSrc']}/>
                <span className='name'> | {friendBlockProps['login']}</span>
                <span className='freethrows'> | freethrows: {friendBlockProps['simpleStats']['freethrows']}</span>
                <span className='threePointers'> | threePointers: {friendBlockProps['simpleStats']['threePointers']}</span>
                <span className='twoPointers'> | twoPointers: {friendBlockProps['simpleStats']['twoPointers']}</span>
            </a>
            {
                friendBlockProps['buttonsInfosList'].map((buttonInfo: FriendActionButtonInfo): JSX.Element => {

                    return (
                    <button disabled={friendBlockProps['isLoading']} key={buttonInfo['text'].split(' ').join('') + friendBlockProps['id']} style={{color:buttonInfo['color']}} onClick={()=>(buttonInfo.action([friendBlockProps['id']]))}> 
                    {buttonInfo['text']}
                    </button>
                    )
                })
            }
        </li>

    );
}