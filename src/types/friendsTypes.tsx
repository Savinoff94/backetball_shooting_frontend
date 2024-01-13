import {FriendsButtons} from '../constants/constants';
import {FriendBlockUserInfo} from '../pages/Friends/types/friendsTypes'
import {MyTeamIdsListType} from '../store/types'

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

type UserButtonProps = {
    userInfo: FriendBlockUserInfo,
    isClicked: boolean,
    handlerOnClick: () => void,
}

export {
    type FriendBlockProps,
    type SimpleStats,
    type UserBasicInfo,
    type friendsButtonsActionsMap,
    type UserButtonProps
}