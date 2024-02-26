import { useContext, useEffect, useRef } from "react";
import {observer} from 'mobx-react-lite';
import { Context } from '../../index';
import SearchFriendBlock from "./components/EnhancedFriendBlocks/SearchFriendBlock";
import SubmitedFriendBlock from "./components/EnhancedFriendBlocks/SubmitedFriendBlock";
import PendingOtherUserFriendRequest from "./components/EnhancedFriendBlocks/PendingOtherUserFriendRequest";
import PendingThisUserFriendRequestBlock from "./components/EnhancedFriendBlocks/PendingThisUserFriendRequestBlock";
import UsersList from './components/FriendBlocksListNew/FriendBlocksListNew'


function FriendsNew() {

  const {userConnectionsStore} = useContext(Context);
  const initialized = useRef(false)
    
  useEffect(() => {

    if (!initialized.current) {
      initialized.current = true
  
      userConnectionsStore.fetchUserConncections();
    }
  }, []);
    
  return (
    <div id="friendsBlock">
      <label htmlFor="friendsSearchInput">Find your friends</label>
      <input id="friendsSearchInput" onChange={(e) => {userConnectionsStore.onSearch(e.target.value)}}></input>
      <>
      <UsersList key='search' borderColor='blue'>
      {Object.values(userConnectionsStore.getSearchList()).map((listItem) => <SearchFriendBlock key={listItem['id']} {...listItem}/>)}
      </UsersList>
      
      <UsersList key='friends' borderColor='green'>
      {Object.values(userConnectionsStore.getFriends()).map((listItem) => <SubmitedFriendBlock key={listItem['id']} {...listItem}/>)}
      </UsersList>
      
      <UsersList key='pendingOtherUsers' borderColor='yellow'>
      {Object.values(userConnectionsStore.getPendingOtherUsersFriendRequests()).map((listItem) => <PendingOtherUserFriendRequest key={listItem['id']} {...listItem}/>)}
      </UsersList>
    
      <UsersList key='pendingThisUser' borderColor='grey'>
      {Object.values(userConnectionsStore.getPendingThisUserFriendRequests()).map((listItem) => <PendingThisUserFriendRequestBlock key={listItem['id']} {...listItem}/>)}
      </UsersList>
      </>
    </div>
      
  );
}

export default observer(FriendsNew);