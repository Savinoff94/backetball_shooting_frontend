import {UserBasicInfo, UserBasicBasketballStats} from '../components/FriendBlockNew/types/FriendBlockNewTypes';


type FriendBlockUserInfo = UserBasicInfo & UserBasicBasketballStats;

type FriendsInfoServerResponse = {
    [id: string] : FriendBlockUserInfo
}

export {
    type FriendsInfoServerResponse,
    type FriendBlockUserInfo
}