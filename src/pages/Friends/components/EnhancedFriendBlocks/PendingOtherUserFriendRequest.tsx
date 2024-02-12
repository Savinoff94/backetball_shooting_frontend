import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';



function PendingOtherUserFriendRequest(friendBlockProps: FriendBlockUserInfo) {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [
        {action: function(ids:string[]){userConnectionsStore.onThisUserApproveFriendRequest(ids)}, text: "Approve", color: 'green'},
        {action: function(ids:string[]){userConnectionsStore.onThisUserDisapproveFriendRequest(ids)}, text: "Disapprove", color: 'red'}
    ];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(PendingOtherUserFriendRequest);