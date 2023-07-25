import {FriendBlockProps} from '../../types/friendsTypes';
import {FriendsButtons, FriendListType} from '../../constants/constants'

//need to add valid ref, react router
export default function FriendBlock(friendBlockProps: FriendBlockProps) {

    const buttonsList = friendBlockProps['buttonsList'];

    const addFriendClickHandler = () => {


    }

    const deleteFriendClickHandler = () => {


    }

    return (

    <li id={friendBlockProps['id']}>
        <a href={friendBlockProps['buttonsList'].includes(FriendsButtons.LOOK_STATS) ? FriendsButtons.LOOK_STATS : '#'}>
            <img alt='profile' src={friendBlockProps['imageSrc']}/>
            <span className='name'>{friendBlockProps['name']}</span>
            <span className='freethrows'>{friendBlockProps['simpleStats']['freethrows']}</span>
            <span className='threePointers'>{friendBlockProps['simpleStats']['threePointers']}</span>
            <span className='twoPointers'>{friendBlockProps['simpleStats']['twoPointers']}</span>
        </a>
        {
            buttonsList.includes(FriendsButtons.SEND_FRIEND_REQUEST) && 
            <button onClick={() => false} style={{color:friendBlockProps['color']}}>Add to friends</button>
        }
        {
            buttonsList.includes(FriendsButtons.APPROVE_FRIEND_REQUEST) && 
            <button onClick={() => false} style={{color:friendBlockProps['color']}}>Approve</button>
        }
        {
            buttonsList.includes(FriendsButtons.DISAPPROVE_FRIEND_REQUEST) && 
            <button onClick={() => false} style={{color:friendBlockProps['color']}}>Disapprove</button>
        }
        {
            buttonsList.includes(FriendsButtons.DELETE_FRIEND) && 
            <button onClick={() => false} style={{color:friendBlockProps['color']}}>Delete</button>
        }
        {
            buttonsList.includes(FriendsButtons.CANCEL_FRIEND_REQUEST) && 
            <button onClick={() => false} style={{color:friendBlockProps['color']}}>Cancel</button>
        }
    </li>

    );
}