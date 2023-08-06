import FriendBlockNew from '../FriendBlockNew/FriendBlockNew';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import {FriendActionButtonInfo} from '../FriendBlockNew/types/FriendBlockNewTypes'

type FriendBlockListNewType = {

    usersInfosList: FriendBlockUserInfo[],
    buttonsInfosList: FriendActionButtonInfo[],
}

export default function FriendBlockListNew(friendBlockPropsList: FriendBlockListNewType):JSX.Element {

    const {usersInfosList, buttonsInfosList} = friendBlockPropsList;

    return (
        <ul>
            {
                usersInfosList.map((friendBlockPropsList: FriendBlockUserInfo) : JSX.Element => {

                    return <FriendBlockNew {...friendBlockPropsList} buttonsInfosList={buttonsInfosList}/>
                })
            }
        </ul>
    );
}