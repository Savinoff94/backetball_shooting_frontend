import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';


const SearchFriendBlock = (friendBlockProps: FriendBlockUserInfo) => {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [{action: function(ids:string[]){userConnectionsStore.onThisUserFriendRequest(ids)}, text: "Add", color: 'green'}];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(SearchFriendBlock);