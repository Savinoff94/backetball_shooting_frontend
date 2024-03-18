import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {SpecificFriendBlockProps} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';



const PendingThisUserFriendRequestBlock = (friendBlockProps: SpecificFriendBlockProps) => {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [{action: function(ids: string[]){userConnectionsStore.onThisUserCancelFriendRequest(ids)}, text: "Cancel", isPrimary: false}];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(PendingThisUserFriendRequestBlock);