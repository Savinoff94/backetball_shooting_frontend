import FriendBlockNew from '../FriendBlockNew/FriendBlockNew';
import {FriendBlockUserInfo} from '../../types/friendsTypes';
import {FriendActionButtonInfo} from '../FriendBlockNew/types/FriendBlockNewTypes'

type FriendBlockListNewType = {

    usersInfosList: FriendBlockUserInfo[],
    buttonsInfosList: FriendActionButtonInfo[],
    friendBlockInfo: {
        type: string,
        color: string
    }
}

export default function FriendBlockListNew(friendBlockPropsList: FriendBlockListNewType):JSX.Element {

    const {usersInfosList, buttonsInfosList, friendBlockInfo} = friendBlockPropsList;

    const ulStyle = {
        borderColor:friendBlockInfo['color'],
        borderStyle: usersInfosList.length === 0 ? 'hidden' : 'solid'
    }

    return (
        <ul key={friendBlockInfo['type']} style={ulStyle}>
            {
                usersInfosList.map((friendBlockPropsList: FriendBlockUserInfo) : JSX.Element => {

                    return <FriendBlockNew {...friendBlockPropsList} buttonsInfosList={buttonsInfosList}/>
                })
            }
        </ul>
    );
}