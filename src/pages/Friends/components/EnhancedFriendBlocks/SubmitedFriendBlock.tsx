import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {SpecificFriendBlockProps} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';



function SubmitedFriendBlock(friendBlockProps: SpecificFriendBlockProps) {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [{action: function(ids:string[]){userConnectionsStore.onThisUserRemoveFriendRequest(ids)}, text: "Remove", isPrimary: false}];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(SubmitedFriendBlock);