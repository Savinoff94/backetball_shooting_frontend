import { useContext, useEffect, useRef } from "react";
import {observer} from 'mobx-react-lite';
import { Context } from '../../index';
import SearchFriendBlock from "./components/EnhancedFriendBlocks/SearchFriendBlock";
import SubmitedFriendBlock from "./components/EnhancedFriendBlocks/SubmitedFriendBlock";
import PendingOtherUserFriendRequest from "./components/EnhancedFriendBlocks/PendingOtherUserFriendRequest";
import PendingThisUserFriendRequestBlock from "./components/EnhancedFriendBlocks/PendingThisUserFriendRequestBlock";
import UsersList from './components/FriendBlocksListNew/FriendBlocksListNew'
import PageStyled from "../../StyledComponents/PageStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";
import InputStyled from "../../StyledComponents/InputStyled";
import SearchField from "../../StyledComponents/SearchField";





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
    <PageStyled>
      <div className="flex flex-col gap-6 w-full h-screen sm:h-fit sm:pb-5 sm:w-1/3 sm:pt-10" id="friendsBlock">
        <Header1Styled>Friends</Header1Styled>
        <SearchField name="searchFriendsInput" value={userConnectionsStore.getSearchStr()} placeholder="Find your friends" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {userConnectionsStore.onSearch(e.target.value)}}/>
        {/* <InputStyled name="searchFriendsInput" value={userConnectionsStore.getSearchStr()} placeholder="Find your friends" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {userConnectionsStore.onSearch(e.target.value)}}/> */}
        <>
        <UsersList listHeader="Search list" key='search' borderColor='blue'>
        {Object.values(userConnectionsStore.getSearchList()).map((listItem, index, arr) => <SearchFriendBlock isAlone={arr.length === 1} key={listItem['id']} {...listItem}/>)}
        </UsersList>
        
        <UsersList listHeader="Friends" key='friends' borderColor='green'>
        {Object.values(userConnectionsStore.getFriends()).map((listItem, index, arr) => <SubmitedFriendBlock isAlone={arr.length === 1} key={listItem['id']} {...listItem}/>)}
        </UsersList>
        
        <UsersList listHeader="Users pending requests" key='pendingOtherUsers' borderColor='yellow'>
        {Object.values(userConnectionsStore.getPendingOtherUsersFriendRequests()).map((listItem, index, arr) => <PendingOtherUserFriendRequest isAlone={arr.length === 1} key={listItem['id']} {...listItem}/>)}
        </UsersList>
      
        <UsersList listHeader="My pending requests" key='pendingThisUser' borderColor='gray'>
        {Object.values(userConnectionsStore.getPendingThisUserFriendRequests()).map((listItem, index, arr) => <PendingThisUserFriendRequestBlock isAlone={arr.length === 1} key={listItem['id']} {...listItem}/>)}
        </UsersList>
        </>
      </div>
    </PageStyled>
      
  );
}

export default observer(FriendsNew);