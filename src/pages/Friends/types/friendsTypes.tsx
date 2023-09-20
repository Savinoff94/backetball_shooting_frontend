
import {UserBasicInfo, UserBasicBasketballStats} from '../components/FriendBlockNew/types/FriendBlockNewTypes';


type FriendBlockUserInfo = UserBasicInfo & {simpleStats: UserBasicBasketballStats};



type UsersInfoById = {
    [id: string] : FriendBlockUserInfo
}

type UserConnections = {
    friends : UsersInfoById,
    pendingThisUsersFriendRequests : UsersInfoById,
    pendingOtherUsersFriendRequests : UsersInfoById,
}

type BaseUserConnectionsInfoType = {
    [key: string]: string[],
    friends : string[],
    pendingOtherUsersFriendRequests : string[],
    pendingThisUserFriendRequests : string[],
}

export {
    type UsersInfoById,
    type FriendBlockUserInfo,
    type BaseUserConnectionsInfoType,
    type UserConnections,
}