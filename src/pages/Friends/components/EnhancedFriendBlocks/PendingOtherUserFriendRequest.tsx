import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {SpecificFriendBlockProps} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';



function PendingOtherUserFriendRequest(friendBlockProps: SpecificFriendBlockProps) {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [
        {action: function(ids:string[]){userConnectionsStore.onThisUserApproveFriendRequest(ids)}, text: "Approve", isPrimary: true},
        {action: function(ids:string[]){userConnectionsStore.onThisUserDisapproveFriendRequest(ids)}, text: "Disapprove", isPrimary: false}
    ];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(PendingOtherUserFriendRequest);