import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {SpecificFriendBlockProps} from '../../types/friendsTypes';
import FriendBlock from '../FriendBlockNew/FriendBlockNew';


const SearchFriendBlock = (friendBlockProps: SpecificFriendBlockProps) => {

    const {userConnectionsStore} = useContext(Context);

    const buttonsInfosList = [{action: function(ids:string[]){userConnectionsStore.onThisUserFriendRequest(ids)}, text: "Add", isPrimary:true}];

    return (
        <>
        <FriendBlock isLoading={userConnectionsStore.getIsLoading()} {...friendBlockProps} buttonsInfosList={buttonsInfosList}/>
        </>
    );
}

export default observer(SearchFriendBlock);