import { useState, useContext } from 'react';
import UserButton from "../../../TrainingPage/components/commonComponents/UserButton/UserButton";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import {ChooseSquadUserButtonProps} from '../../../TrainingPage/types/trainingPageTypes'
import {MyTeamIdsListType} from '../../../../store/types'


function ChooseUsersToRepresentUserButton({userInfo, usersListType} : ChooseSquadUserButtonProps) {

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

export default observer(ChooseUsersToRepresentUserButton);
