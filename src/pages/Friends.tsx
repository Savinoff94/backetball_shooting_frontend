import { useState, useEffect } from "react";
import {FriendsButtons, FriendListTypes} from '../constants/constants';
import {removeItemFromObjById, transferItemFromObjToObj} from '../helpers/common';
import FriendBlockList from '../components/FriendBlockList/FriendBlockList';
import {UserBasicInfo, friendsButtonsActionsMap} from '../types/friendsTypes';

//add fetch OnDelete
export default function Friends() {

  const [search, setSearch] = useState({});
  const [friends, setFriends] = useState({});
  const [pendingOtherUsersFriendRequests, setPendingOtherUsersFriendRequests] = useState({});
  const [pendingThisUserFriendRequests, setPendingThisUserFriendRequests] = useState({});

  useEffect(() => {

    fetch('http://localhost:3000/fakeData/friendsFakeData.json')
    .then((response) => {

      // if(response.ok) {

          return response.json();
      // }

      // throw new Error("Error");
      
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
      setPendingOtherUsersFriendRequests(friendsCopy);

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

    if(userInput.length !== 1 || (userInput.length % 3 !== 0)) {

      return;
    }

    fetch('http://localhost:3000/fakeData/usersFakeData.json')
    .then((response) => response.json())
    .then((users) => {

      const displayedUsers = [...Object.keys(friends), ...Object.keys(pendingOtherUsersFriendRequests), ...Object.keys(pendingThisUserFriendRequests)];

      displayedUsers.forEach((id) => {

        delete users[id];
      });

      const idsWithCoincidenceName = Object.keys(users).filter((id) => {

        if(users['id']['name'].includes(userInput)) {

          return true;
        }

        return false;
      });

      const searchUsers: any = {};

      idsWithCoincidenceName.forEach((id) => {

        searchUsers[id] = structuredClone(users[id]);

      });

      setSearch(searchUsers);
    });
  }

  const buttonsActionsMap: friendsButtonsActionsMap = {
    [FriendsButtons.SEND_FRIEND_REQUEST] : sendFriendRequest,
    [FriendsButtons.APPROVE_FRIEND_REQUEST] : approveFriendRequest,
    [FriendsButtons.DISAPPROVE_FRIEND_REQUEST] : disapproveFriendRequest,
    [FriendsButtons.DELETE_FRIEND] : deleteFriend,
    [FriendsButtons.CANCEL_FRIEND_REQUEST] : cancelFriendRequest,
  }
  //Problem
  const searchData : UserBasicInfo[] = Object.entries(search)[1];
  const friendsData : UserBasicInfo[] = Object.entries(friends)[1];
  const pendingOtherUsersFriendRequestsData : UserBasicInfo[] = Object.entries(pendingOtherUsersFriendRequests)[1];
  const pendingThisUserFriendRequestsData : UserBasicInfo[] = Object.entries(pendingThisUserFriendRequests)[1];

  return (
    <div>
      <label htmlFor="friendsSearchInput">Find your friends</label>
      <input id="friendsSearchInput" onChange={(e) => {onSearch(e.target.value)}}></input>
      <>
      <FriendBlockList {searchData} friendListType={FriendListTypes.SEARCH} buttonsActionsMap={{buttonsActionsMap}}/>
      <FriendBlockList {friendsData} friendListType={FriendListTypes.PENDING_OTHER_USERS_FRIEND_REQUESTS} buttonsActionsMap={buttonsActionsMap}/>
      <FriendBlockList {pendingOtherUsersFriendRequestsData} friendListType={FriendListTypes.FRIENDS} buttonsActionsMap={buttonsActionsMap}/>
      <FriendBlockList {pendingThisUserFriendRequestsData} friendListType={FriendListTypes.PENDING_THIS_USER_FRIEND_REQUESTS} buttonsActionsMap={buttonsActionsMap}/>
      </>
    </div>
    
  );

  

  

  
}