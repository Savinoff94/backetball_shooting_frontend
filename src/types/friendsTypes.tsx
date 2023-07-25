import {FriendsButtons, FriendListTypes} from '../constants/constants';

//used in FriendBlock
type UserBasicInfo = {

    id: string
    imageSrc: string,
    name: string,
    simpleStats: SimpleStats,
}

type FriendBlockProps = UserBasicInfo & {buttonsList: string[], color: string}


type SimpleStats = {

    freethrows: string,
    threePointers: string,
    twoPointers: string,

}

type friendsButtonsActionsMap = {
    [FriendsButtons.SEND_FRIEND_REQUEST]: (ids:string[])=> void, 
    [FriendsButtons.APPROVE_FRIEND_REQUEST]: (ids:string[])=> void, 
    [FriendsButtons.DISAPPROVE_FRIEND_REQUEST]: (ids:string[])=> void, 
    [FriendsButtons.DELETE_FRIEND]: (ids:string[])=> void, 
    [FriendsButtons.CANCEL_FRIEND_REQUEST]: (ids:string[])=> void
}
//Problem
// type FriendBlockPossibleTypes =  'search' | 'pending_other_users_friend_requests' | 'friends' | 'pending_this_user_friend_requests';
//                                 keyof typeof FriendListType.PENDING_OTHER_USERS_FRIEND_REQUESTS |
//                                 keyof typeof FriendListType.PENDING_THIS_USER_FRIEND_REQUESTS |
//                                 keyof typeof FriendListType.FRIENDS;

// type FriendBlockPossibleTypes = keyof typeof FriendListType.SEARCH |
//                                 keyof typeof FriendListType.PENDING_OTHER_USERS_FRIEND_REQUESTS |
//                                 keyof typeof FriendListType.PENDING_THIS_USER_FRIEND_REQUESTS |
//                                 keyof typeof FriendListType.FRIENDS;

FriendListTypes.SEARCH | 

type FriendBlockPossibleTypes = keyof FriendListTypes.SEARCH |
                                keyof FriendListTypes.PENDING_OTHER_USERS_FRIEND_REQUESTS |
                                keyof FriendListTypes.PENDING_THIS_USER_FRIEND_REQUESTS |
                                keyof FriendListTypes.FRIENDS;

export {
    type FriendBlockProps,
    type SimpleStats,
    type UserBasicInfo,
    type FriendBlockPossibleTypes,
    type friendsButtonsActionsMap,
}