
import {UsersInfoById} from '../types/friendsTypes'
import {BaseUserConnectionsInfoType} from '../types/friendsTypes';


function addIdsToList(baseIdsArray : string[], idsToAddArray : string[]) : string[] {
    
    return [...baseIdsArray, ...idsToAddArray];
}

function removeIdsFromList(baseIdsArray : string[], idsToRemoveArray : string[]) : string[] {

    let result = baseIdsArray.filter((id) => {

        if(idsToRemoveArray.includes(id)) {

            return false;
        }

        return true
    })

    return result;
}


type updatedUserConnectionsFieldsObjType = {
    [key: string]: string[] | undefined,
    friends ?: string[],
    pendingOtherUsersFriendRequests ?: string[],
    pendingThisUserFriendRequests ?: string[],
}

function getUpdatedUserConntectionsOnThisUserFriendRequest(pendingThisUserFriendRequestsIds : string[], idsArray : string[]) : updatedUserConnectionsFieldsObjType {

    const updatedThisUserFriendRequests = addIdsToList(pendingThisUserFriendRequestsIds, idsArray);

    return {pendingThisUserFriendRequests : updatedThisUserFriendRequests}
}
function getUpdatedUserConntectionsOnThisUserCancelFriendRequest(pendingThisUserFriendRequestsIds : string[], idsArray : string[]) : updatedUserConnectionsFieldsObjType {

    const updatedThisUserFriendRequests = removeIdsFromList(pendingThisUserFriendRequestsIds, idsArray);

    return {pendingThisUserFriendRequests : updatedThisUserFriendRequests}
}
function getUpdatedUserConntectionsOnThisUserApproveFriendRequest(friendsIds: string[], pendingOtherUsersFriendRequestsIds : string[], idsArray : string[]) : updatedUserConnectionsFieldsObjType {

    const updatedFriends = addIdsToList(friendsIds, idsArray);

    const updatedOtherUsersFriendRequests = removeIdsFromList(pendingOtherUsersFriendRequestsIds, idsArray);

    return {
      friends: updatedFriends,
      pendingOtherUsersFriendRequests: updatedOtherUsersFriendRequests,
    };
}
function getUpdatedUserConntectionsOnThisUserDisapproveFriendRequest(pendingOtherUsersFriendRequestsIds : string[], idsArray : string[]) : updatedUserConnectionsFieldsObjType {

    const updatedOtherUsersFriendRequests = removeIdsFromList(pendingOtherUsersFriendRequestsIds, idsArray);

    return {pendingOtherUsersFriendRequests: updatedOtherUsersFriendRequests}
}
function getUpdatedUserConntectionsOnRemoveFriend(friendsIds : string[], idsArray : string[]) : updatedUserConnectionsFieldsObjType {

    const updatedFriends = removeIdsFromList(friendsIds, idsArray);

    return {friends: updatedFriends}
}



function getBaseUserConnectionsObj(friends: UsersInfoById, pendingOtherUsersFriendRequests: UsersInfoById, pendingThisUserFriendRequests: UsersInfoById) : BaseUserConnectionsInfoType {

    return {
        friends: Object.keys(friends),
        pendingOtherUsersFriendRequests: Object.keys(pendingOtherUsersFriendRequests),
        pendingThisUserFriendRequests: Object.keys(pendingThisUserFriendRequests)
    }
}

function updateUserConectionsObj(baseUserConnectionsObj : BaseUserConnectionsInfoType, updatedUserConnectionsFieldsObj: updatedUserConnectionsFieldsObjType) : void {

    const fieldNames = Object.keys(updatedUserConnectionsFieldsObj);

    fieldNames.forEach((fieldName: string) => {

        if(fieldName in baseUserConnectionsObj) {

            baseUserConnectionsObj[fieldName] = updatedUserConnectionsFieldsObj[fieldName] || []
        }
    });
}
 



export {
    addIdsToList,
    removeIdsFromList,
    getUpdatedUserConntectionsOnThisUserFriendRequest,
    getUpdatedUserConntectionsOnThisUserCancelFriendRequest,
    getUpdatedUserConntectionsOnThisUserApproveFriendRequest,
    getUpdatedUserConntectionsOnThisUserDisapproveFriendRequest,
    getUpdatedUserConntectionsOnRemoveFriend,
    getBaseUserConnectionsObj,
    updateUserConectionsObj
}