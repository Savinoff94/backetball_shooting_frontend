import UserButton from '../commonComponents/UserButton/UserButton';
import {UserButtonProps} from '../../../../types/friendsTypes'

import { useState, useContext } from 'react';
import { Context } from '../../../../index';

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