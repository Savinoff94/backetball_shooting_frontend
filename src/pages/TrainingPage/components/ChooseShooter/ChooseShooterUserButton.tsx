import UserButton from "../commonComponents/UserButton/UserButton";
import { useState, useContext } from 'react';
import { Context } from '../../../../index';
import {ChooseShooterUserButtonProps} from '../../types/trainingPageTypes';



export default function ChooseShooterUserButton({userInfo}: ChooseShooterUserButtonProps) : JSX.Element {

    const {trainingBoardStore} = useContext(Context);
    
    const [isUserClicked, setIsUserClicked] = useState<boolean>(trainingBoardStore.isCurrentShooter(userInfo['id']));

    const handlerClick = (id:string) => {
        
        trainingBoardStore.setCurrentShooter(id);
        
        setIsUserClicked(trainingBoardStore.isCurrentShooter(id));
    }

    return (
        <UserButton
        userInfo = {userInfo}
        isClicked = {isUserClicked}
        handlerOnClick = {() => handlerClick(userInfo['id'])}
        />
    )
}