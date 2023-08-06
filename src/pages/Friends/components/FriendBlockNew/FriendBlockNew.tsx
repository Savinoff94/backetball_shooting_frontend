import {FriendActionButtonInfo} from './types/FriendBlockNewTypes';
import {FriendBlockUserInfo} from '../../types/friendsTypes';

type FriendBlockProps = FriendBlockUserInfo & {buttonsInfosList: FriendActionButtonInfo[]}

export default function FriendBlock(friendBlockProps: FriendBlockProps): JSX.Element {

    return (

        <li id={friendBlockProps['id']}>
            <a href={'http://localhost:5000/api/charts/:'+friendBlockProps['id']}>
                <img alt='profile' src={friendBlockProps['imageSrc']}/>
                <span className='name'>{friendBlockProps['login']}</span>
                <span className='freethrows'>{friendBlockProps['freethrows']}</span>
                <span className='threePointers'>{friendBlockProps['threePointers']}</span>
                <span className='twoPointers'>{friendBlockProps['twoPointers']}</span>
            </a>
            {
                friendBlockProps['buttonsInfosList'].map((buttonInfo: FriendActionButtonInfo): JSX.Element => {

                    return <button style={{color:buttonInfo['color']}} onClick={()=>(buttonInfo.action([friendBlockProps['id']]))}>{buttonInfo['text']}</button>
                })
            }
        </li>

    );
}