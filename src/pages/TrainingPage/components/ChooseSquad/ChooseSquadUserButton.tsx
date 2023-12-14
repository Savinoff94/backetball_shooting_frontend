import {FriendBlockUserInfo} from '../../../Friends/types/friendsTypes'
import UserButton from '../commonComponents/UserButton/UserButton';

import { useState, useContext } from 'react';
import { Context } from '../../../../index';


type UserButtonProps = {
    userInfo: FriendBlockUserInfo,
    isClicked: boolean,
    handlerOnClick: (id: string) => void
}

export default function ChooseSquadUserButton({userInfo, isClicked, handlerOnClick}: UserButtonProps) : JSX.Element {

    const {selectTrainingSquadStoreInstance} = useContext(Context);

    const [isUserClicked, setIsUserClicked] = useState<boolean>(isClicked);

    const handlerClick = (id:string) => {
        
        handlerOnClick(id);
        
        setIsUserClicked(selectTrainingSquadStoreInstance.isIdInTrainingSquadIds(id));
    }

    return (
        <UserButton
        userInfo = {userInfo}
        isClicked = {isUserClicked}
        handlerOnClick = {handlerClick}
        />
    )
}