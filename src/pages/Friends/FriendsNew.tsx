import { useState, useEffect } from "react";
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

export default function FriendsNew() {
   
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

      fetch('http://localhost:3000/fakeData/friendsFakeData.json')
      .then((response) => {
  
        return response.json();
        
      })
      .then((responseJson) => {
  
        setFriends(responseJson['friends']);
  
        setPendingThisUserFriendRequests(responseJson['pendingThisUsersFriendRequests']);
        
        setPendingOtherUsersFriendRequests(responseJson['pendingOtherUsersFriendRequests']);
  
      })
      .catch((error) => {
  
        console.log(error)
  
      });
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

    const onSearch = (userInput: string) => {

      userInput = userInput.toLowerCase();

      if(userInput.length !== 1 && ((userInput.length % 3) !== 0)) {
        
        return;
      }
    
      fetch('http://localhost:3000/fakeData/usersFakeData.json')
      .then((response) => response.json())
      .then((users) => {
  
        const displayedUsers = [...Object.keys(friends), ...Object.keys(pendingOtherUsersFriendRequests), ...Object.keys(pendingThisUserFriendRequests)];
  
        displayedUsers.forEach((id) => {
  
          delete users[id];
        });
  
        const idsWithCoincidenceName = Object.keys(users).filter((userId) => {

          const userLogin = users[userId.toString()]['login'].toLowerCase();
  
          if(userLogin.includes(userInput)) {
  
            return true;
          }
  
          return false;
        });
  
        const searchUsers: any = {};
  
        idsWithCoincidenceName.forEach((userId) => {
  
          searchUsers[userId] = structuredClone(users[userId]);
  
        });
  
        setSearch(searchUsers);
      });
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