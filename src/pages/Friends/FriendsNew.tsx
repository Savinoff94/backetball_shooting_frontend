import { useState, useEffect, useContext } from "react";
import FriendBlockListNew from "./components/FriendBlocksListNew/FriendBlocksListNew";
import {UsersInfoById} from './types/friendsTypes'
import {removeItemFromObjById, transferItemFromObjToObj} from '../../helpers/common';
import {
  getUpdatedUserConntectionsOnThisUserFriendRequest,
  getUpdatedUserConntectionsOnThisUserCancelFriendRequest,
  getUpdatedUserConntectionsOnThisUserApproveFriendRequest,
  getUpdatedUserConntectionsOnThisUserDisapproveFriendRequest,
  getUpdatedUserConntectionsOnRemoveFriend,
  getBaseUserConnectionsObj,
  updateUserConectionsObj
} from './helpers/userConnections';

import {filterByLogin} from './helpers/userFrontEndFilters';
import UserService from "../../services/UserService";
import UserConnectionsService from "../../services/UserConnectionsService";
import { AxiosResponse } from "axios";
import { Context } from '../../index';



export default function FriendsNew() {

  const {store} = useContext(Context);

  const [search, setSearch] = useState <UsersInfoById> ({});
  const [friends, setFriends] = useState <UsersInfoById> ({});
  const [pendingOtherUsersFriendRequests, setPendingOtherUsersFriendRequests] = useState <UsersInfoById> ({});
  const [pendingThisUserFriendRequests, setPendingThisUserFriendRequests] = useState <UsersInfoById> ({});

  function onThisUserFriendRequest(idsArray : string[]) {

    const updatedUserConnections = getUpdatedUserConntectionsOnThisUserFriendRequest(Object.keys(pendingThisUserFriendRequests), idsArray);

    const userConnectionsObj = getBaseUserConnectionsObj(friends, pendingOtherUsersFriendRequests, pendingThisUserFriendRequests);

    updateUserConectionsObj(userConnectionsObj, updatedUserConnections);
    
  }
  function onThisUserCancelFriendRequest(idsArray : string[]) {

    const updatedUserConnections = getUpdatedUserConntectionsOnThisUserCancelFriendRequest(Object.keys(pendingThisUserFriendRequests), idsArray)

    const userConnectionsObj = getBaseUserConnectionsObj(friends, pendingOtherUsersFriendRequests, pendingThisUserFriendRequests);

    updateUserConectionsObj(userConnectionsObj, updatedUserConnections);
    
  }
  function onThisUserApproveFriendRequest(idsArray : string[]) {

    const updatedUserConnections = getUpdatedUserConntectionsOnThisUserApproveFriendRequest(Object.keys(friends), Object.keys(pendingOtherUsersFriendRequests), idsArray);

    const userConnectionsObj = getBaseUserConnectionsObj(friends, pendingOtherUsersFriendRequests, pendingThisUserFriendRequests);

    updateUserConectionsObj(userConnectionsObj, updatedUserConnections);

  }

  function onThisUserDisapproveFriendRequest(idsArray : string[]) {

    const updatedUserConnections = getUpdatedUserConntectionsOnThisUserDisapproveFriendRequest(Object.keys(pendingOtherUsersFriendRequests), idsArray);

    const userConnectionsObj = getBaseUserConnectionsObj(friends, pendingOtherUsersFriendRequests, pendingThisUserFriendRequests);

    updateUserConectionsObj(userConnectionsObj, updatedUserConnections);
    
  }

  function onThisUserRemoveFriend(idsArray : string[]) {

    const updatedUserConnections = getUpdatedUserConntectionsOnRemoveFriend(Object.keys(friends), idsArray);

    const userConnectionsObj = getBaseUserConnectionsObj(friends, pendingOtherUsersFriendRequests, pendingThisUserFriendRequests);

    updateUserConectionsObj(userConnectionsObj, updatedUserConnections);

  }
    
  useEffect(() => {

    async function fetchUserConncections() {

      try {

        const userConnectionsRes = await UserConnectionsService.getUserConnections(store.getUserId());

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

  const sendFriendRequest = (ids: string[]) => {

    fetch('http://localhost:3000/fakeData/usersFakeData.json')
    .then((response) => response.json())
    .then((users) => {

      const pendingThisUserFriendRequestsCopy = transferItemFromObjToObj(ids, users, pendingThisUserFriendRequests);
      setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);

      const searchCopy = removeItemFromObjById(ids, search);
      setSearch(searchCopy);
    })
    .catch((error) => console.log(error))
  }

  const approveFriendRequest = (ids: string[]) => {

    fetch('http://localhost:3000/fakeData/usersFakeData.json')
    .then((response) => response.json())
    .then((users) => {

      const friendsCopy = transferItemFromObjToObj(ids, users, friends);
      setFriends(friendsCopy);

      const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(ids, pendingOtherUsersFriendRequests);
      setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);
    })
    .catch((error) => console.log(error))
  }

  const disapproveFriendRequest = (ids:string[]) => {

    const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(ids, pendingOtherUsersFriendRequests);
    setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);
  }
    
  const deleteFriend = (ids:string[]) => {
  
    const friendsCopy = removeItemFromObjById(ids, friends);
    setFriends(friendsCopy);
  }
    
  const cancelFriendRequest = (ids:string[]) => {
  
    const pendingThisUserFriendRequestsCopy = removeItemFromObjById(ids, pendingThisUserFriendRequests);
    setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);
  }

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
    buttonsInfosList: [{action: sendFriendRequest, text: "Add", color: 'green'}],
    friendBlockInfo: {
      type: 'search',
      color: 'blue'
    }
  }
  const friendsProps = {
    usersInfosList:structuredClone(Object.values(friends)),
    buttonsInfosList: [{action: deleteFriend, text: "Remove", color: 'red'}],
    friendBlockInfo: {
      type: 'friends',
      color: 'green'
    }
  }
  const pendingOtherUsersProps = {
    usersInfosList:structuredClone(Object.values(pendingOtherUsersFriendRequests)),
    buttonsInfosList: [{action: approveFriendRequest, text: "Approve", color: 'green'}, {action: disapproveFriendRequest, text: "Disapprove", color: 'red'}],
    friendBlockInfo: {
      type: 'pendingOtherUsers',
      color: 'yellow'
    }
  }
  const pendingThisUserProps = {
    usersInfosList:structuredClone(Object.values(pendingThisUserFriendRequests)),
    buttonsInfosList: [{action: cancelFriendRequest, text: "Cancel", color: 'red'}],
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