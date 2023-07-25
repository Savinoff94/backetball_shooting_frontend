import {FriendBlockPossibleTypes} from '../types/friendsTypes'

export class FriendsButtons {

    static readonly SEND_FRIEND_REQUEST = 'send_friend_request';
    static readonly APPROVE_FRIEND_REQUEST = 'approve_friend_request';
    static readonly DISAPPROVE_FRIEND_REQUEST = 'disapprove_friend_request';
    static readonly DELETE_FRIEND = 'delete_friend';
    static readonly CANCEL_FRIEND_REQUEST = 'cancel_friend_request';
    static readonly LOOK_STATS = 'look_stats';
    
    
    static getSearchFriendButtonsList = () => {

        return [this.LOOK_STATS, this.SEND_FRIEND_REQUEST];
    }

    static getPendingOtherUsersFriendRequestsButtonsList = () => {

        return [this.LOOK_STATS, this.DISAPPROVE_FRIEND_REQUEST]
    }

    static getFriendsButtonsList = () => {

        return [this.LOOK_STATS, this.DELETE_FRIEND];
    }

    static getPendingThisUsersFriendRequestsButtonsList = () => {

        return [this.LOOK_STATS, this.DISAPPROVE_FRIEND_REQUEST]
    }

    static getButtonsList = (friendListType: FriendBlockPossibleTypes) => {

        switch (friendListType) {
            case FriendListTypes.SEARCH:
                return FriendsButtons.getSearchFriendButtonsList();

            case FriendListTypes.PENDING_OTHER_USERS_FRIEND_REQUESTS:
                return FriendsButtons.getPendingOtherUsersFriendRequestsButtonsList();
            
            case FriendListTypes.FRIENDS:
                return FriendsButtons.getFriendsButtonsList();
            
            case FriendListTypes.PENDING_THIS_USER_FRIEND_REQUESTS:
                return FriendsButtons.getPendingThisUsersFriendRequestsButtonsList();

            default:
                return [];
        }
    }
};

export class FriendListTypes {

    static readonly SEARCH = 'search';
    static readonly PENDING_OTHER_USERS_FRIEND_REQUESTS = 'pending_other_users_friend_requests';
    static readonly FRIENDS = 'friends';
    static readonly PENDING_THIS_USER_FRIEND_REQUESTS = 'pending_this_user_friend_requests';
    

    static readonly COLOR_OF_SEARCH = 'blue';
    static readonly COLOR_OF_PENDING_OTHER_USERS_FRIEND_REQUESTS = 'orange';
    static readonly COLOR_OF_FRIENDS = 'green';
    static readonly COLOR_OF_PENDING_THIS_USER_FRIEND_REQUESTS = 'yellow';
    static readonly COLOR_OF_DEFAULT = 'grey';


    static getColor = (friendListType: FriendBlockPossibleTypes) => {

        switch (friendListType) {
            case FriendListTypes.SEARCH:
                return FriendListTypes.COLOR_OF_SEARCH;

            case FriendListTypes.PENDING_OTHER_USERS_FRIEND_REQUESTS:
                return FriendListTypes.COLOR_OF_PENDING_OTHER_USERS_FRIEND_REQUESTS;
            
            case FriendListTypes.PENDING_THIS_USER_FRIEND_REQUESTS:
                return FriendListTypes.COLOR_OF_PENDING_THIS_USER_FRIEND_REQUESTS;

            case FriendListTypes.FRIENDS:
                return FriendListTypes.COLOR_OF_FRIENDS;

            default:
                return FriendListTypes.COLOR_OF_DEFAULT;
        }
    }

}