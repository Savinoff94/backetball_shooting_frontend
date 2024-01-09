import UserButton from "../commonComponents/UserButton/UserButton";
import { useState, useContext } from 'react';
import { Context } from '../../../../index';
import {UserButtonProps} from '../../../../types/friendsTypes'


export default function ChooseShooterUserButton({userInfo, isClicked, handlerOnClick}: UserButtonProps) : JSX.Element {

    const {trainingBoardStore} = useContext(Context);
    
    const [isUserClicked, setIsUserClicked] = useState<boolean>(isClicked);

    const handlerClick = (id:string) => {
        
        handlerOnClick(id);
        
        setIsUserClicked(trainingBoardStore.isCurrentShooter(id));
    }

    return (
        <UserButton
        userInfo = {userInfo}
        isClicked = {isUserClicked}
        handlerOnClick = {handlerClick}
        />
    )
}