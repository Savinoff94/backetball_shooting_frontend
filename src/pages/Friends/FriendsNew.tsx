import { useState, useEffect } from "react";
import FriendBlockListNew from "./components/FriendBlocksListNew/FriendBlocksListNew";
import {FriendsInfoServerResponse} from './types/friendsTypes'
import {removeItemFromObjById, transferItemFromObjToObj} from '../../helpers/common';

export default function FriendsNew() {
   
    const [search, setSearch] = useState <FriendsInfoServerResponse> ({});
    const [friends, setFriends] = useState <FriendsInfoServerResponse> ({});
    const [pendingOtherUsersFriendRequests, setPendingOtherUsersFriendRequests] = useState <FriendsInfoServerResponse> ({});
    const [pendingThisUserFriendRequests, setPendingThisUserFriendRequests] = useState <FriendsInfoServerResponse> ({});

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

    const searchProps = {
        usersInfosList:structuredClone(Object.entries(search)[1]),
        buttonsInfosList: [{action: sendFriendRequest, text: "Add", color: 'green'}]
    }
    const friendsProps = {
        usersInfosList:structuredClone(Object.entries(friends)[1]),
        buttonsInfosList: [{action: deleteFriend, text: "Remove", color: 'red'}]
    }
    const pendingOtherUsersProps = {
        usersInfosList:structuredClone(Object.entries(pendingOtherUsersFriendRequests)[1]),
        buttonsInfosList: [{action: approveFriendRequest, text: "Approve", color: 'green'}, {action: disapproveFriendRequest, text: "Disapprove", color: 'red'}]
    }
    const pendingThisUserProps = {
        usersInfosList:structuredClone(Object.entries(pendingThisUserFriendRequests)[1]),
        buttonsInfosList: [{action: cancelFriendRequest, text: "Approve", color: 'red'}]
    }

    return (
        <div>
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