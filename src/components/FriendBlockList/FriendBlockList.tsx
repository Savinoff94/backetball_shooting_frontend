import {UserBasicInfo, FriendBlockPossibleTypes, FriendBlockProps, friendsButtonsActionsMap} from '../../types/friendsTypes';
import {FriendsButtons, FriendListType} from '../../constants/constants';
import FriendBlock from "../FriendBlock/FriendBlock"

export default function FriendBlockList(userBasicList: UserBasicInfo[], friendListType: FriendBlockPossibleTypes, buttonsActionsMap: friendsButtonsActionsMap) {

    const friendBlockList = userBasicList.map((userInfo:UserBasicInfo): JSX.Element => {

        const friendBlockProps: FriendBlockProps = {
            ...userInfo, 
            buttonsList: FriendsButtons.getButtonsList(friendListType),
            color: FriendListType.getColor(friendListType),
        }

        return <FriendBlock {...friendBlockProps}/>;
    });


    return (
        <ul id={friendListType}>
            {friendBlockList}
        </ul>
    );
}