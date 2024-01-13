import UserButton from '../commonComponents/UserButton/UserButton';
import { useState, useContext } from 'react';
import { Context } from '../../../../index';
import {MyTeamIdsListType} from '../../../../store/types'
import {ChooseSquadUserButtonProps} from '../../types/trainingPageTypes'


export default function ChooseSquadUserButton({userInfo, usersListType} : ChooseSquadUserButtonProps) : JSX.Element {

    const {myTeamStoreInstance} = useContext(Context);

    const [isUserClicked, setIsUserClicked] = useState<boolean>(myTeamStoreInstance.isIdInUsersIdsList(userInfo['id'], usersListType));

    const handlerClick = (id:string, usersListType: MyTeamIdsListType) => {
        
        myTeamStoreInstance.handleOnUserClick(id, usersListType);
        
        setIsUserClicked(myTeamStoreInstance.isIdInUsersIdsList(id, usersListType));
    }

    return (
        <UserButton
        userInfo = {userInfo}
        isClicked = {isUserClicked}
        handlerOnClick = {() => {handlerClick(userInfo['id'], usersListType)}}
        />
    )
}