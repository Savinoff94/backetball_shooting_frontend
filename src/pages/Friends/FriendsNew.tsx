import { useState, useEffect, useContext } from "react";
import FriendBlockListNew from "./components/FriendBlocksListNew/FriendBlocksListNew";
import {UsersInfoById} from './types/friendsTypes'
import {removeItemFromObjById, transferItemFromObjToObj} from '../../helpers/common';

import {filterByLogin} from './helpers/userFrontEndFilters';
import UserService from "../../services/UserService";
import UserConnectionsService from "../../services/UserConnectionsService";
import { AxiosResponse } from "axios";
// import { Context } from '../../index';



export default function FriendsNew() {

  // const {store} = useContext(Context);
  // console.log('user:', store.user.login)

  const [search, setSearch] = useState <UsersInfoById> ({});
  const [friends, setFriends] = useState <UsersInfoById> ({});
  const [pendingOtherUsersFriendRequests, setPendingOtherUsersFriendRequests] = useState <UsersInfoById> ({});
  const [pendingThisUserFriendRequests, setPendingThisUserFriendRequests] = useState <UsersInfoById> ({});

  async function onThisUserFriendRequest(idsArray : string[]) {

    try {

      const result = UserConnectionsService.friendRequest(idsArray);

      const pendingThisUserFriendRequestsCopy = transferItemFromObjToObj(idsArray, search, pendingThisUserFriendRequests);
      setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);

      const searchCopy = removeItemFromObjById(idsArray, search);
      setSearch(searchCopy);
      
    } catch (error) {
      
      console.log(error)
    }
  }
  async function onThisUserCancelFriendRequest(idsArray : string[]) {

    try {

      const result = UserConnectionsService.cancelFriendRequest(idsArray);

      const pendingThisUserFriendRequestsCopy = removeItemFromObjById(idsArray, pendingThisUserFriendRequests);
      setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);
      
    } catch (error) {
      
      console.log(error)
    }
  }
  async function onThisUserApproveFriendRequest(idsArray : string[]) {
    
    try {

      const result = UserConnectionsService.approveFriendRequest(idsArray);

      const friendsCopy = transferItemFromObjToObj(idsArray, pendingOtherUsersFriendRequests, friends);
      setFriends(friendsCopy);

      const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(idsArray, pendingOtherUsersFriendRequests);
      setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);
      
    } catch (error) {
      
      console.log(error)
    }

  }

  async function onThisUserDisapproveFriendRequest(idsArray : string[]) {

    try {

      const result = await UserConnectionsService.disapproveFriendRequest(idsArray);

      const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(idsArray, pendingOtherUsersFriendRequests);
      setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);

    } catch (error) {
      
      console.log(error)
    }

  }

  async function onThisUserRemoveFriendRequest(idsArray : string[]) {

    try {

      const result = UserConnectionsService.removeFriendRequest(idsArray);

      const friendsCopy = removeItemFromObjById(idsArray, friends);
      setFriends(friendsCopy);
      
    } catch (error) {
      
      console.log(error)
    }
  }
    
  useEffect(() => {

    async function fetchUserConncections() {

      try {

        const userConnectionsRes = await UserConnectionsService.getUserConnections();

        const userConnections = userConnectionsRes.data;

        setFriends(userConnections['friends']);

        setPendingThisUserFriendRequests(userConnections['pendingThisUsersFriendRequests']);
      
        setPendingOtherUsersFriendRequests(userConnections['pendingOtherUsersFriendRequests']);

      } catch (error) {
  
        console.log(error)
      } 
    }

    fetchUserConncections();

  }, []);

  const onSearch = async (userInput: string) => {

    userInput = userInput.toLowerCase();

    if(userInput.length !== 1 && ((userInput.length % 3) !== 0)) {

      const filteredSearch = filterByLogin(search, userInput);

      setSearch(filteredSearch);
      
      return;
    }

    try {

      const usersResponse : AxiosResponse<UsersInfoById> = await UserService.searchUsers(userInput, false);

      const users : UsersInfoById = usersResponse.data;

      const displayedUsers = [...Object.keys(friends), ...Object.keys(pendingOtherUsersFriendRequests), ...Object.keys(pendingThisUserFriendRequests)];

      displayedUsers.forEach((id) => {

        delete users[id];
      });

      setSearch(structuredClone(users));
      
    } catch (error) {
      
      console.log(error)
    }
  }
    
  const searchProps = {
    usersInfosList:structuredClone(Object.values(search)),
    buttonsInfosList: [{action: onThisUserFriendRequest, text: "Add", color: 'green'}],
    friendBlockInfo: {
      type: 'search',
      color: 'blue'
    }
  }
  const friendsProps = {
    usersInfosList:structuredClone(Object.values(friends)),
    buttonsInfosList: [{action: onThisUserRemoveFriendRequest, text: "Remove", color: 'red'}],
    friendBlockInfo: {
      type: 'friends',
      color: 'green'
    }
  }
  const pendingOtherUsersProps = {
    usersInfosList:structuredClone(Object.values(pendingOtherUsersFriendRequests)),
    buttonsInfosList: [{action: onThisUserApproveFriendRequest, text: "Approve", color: 'green'}, {action: onThisUserDisapproveFriendRequest, text: "Disapprove", color: 'red'}],
    friendBlockInfo: {
      type: 'pendingOtherUsers',
      color: 'yellow'
    }
  }
  const pendingThisUserProps = {
    usersInfosList:structuredClone(Object.values(pendingThisUserFriendRequests)),
    buttonsInfosList: [{action: onThisUserCancelFriendRequest, text: "Cancel", color: 'red'}],
    friendBlockInfo: {
      type: 'pendingThisUser',
      color: 'grey'
    }
  }

    

  return (
    <div key="friendsBlock">
      <label htmlFor="friendsSearchInput">Find your friends</label>
      <input id="friendsSearchInput" onChange={(e) => {onSearch(e.target.value)}}></input>
      <>
      <FriendBlockListNew {...searchProps}/>
      <FriendBlockListNew {...friendsProps}/>
      <FriendBlockListNew {...pendingOtherUsersProps}/>
      <FriendBlockListNew {...pendingThisUserProps}/>
      </>
    </div>
      
  );
}