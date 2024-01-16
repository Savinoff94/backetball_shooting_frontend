import { useContext } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import ChooseShooterSubmitButton from "./ChooseShooterSubmitButton";
import ChooseShooterPreviousStageButton from "./ChooseShooterPreviousStageButton";
import ChooseUsersTemplate from "../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate";
import ChooseShooterUserButton from "./ChooseShooterUserButton";

function ChooseShooter() : JSX.Element {

    const {myTeamStoreInstance} = useContext(Context);

    const possibleTrainingSquadUsers : UsersInfoById = myTeamStoreInstance.getMyTeamUsers();

    const trainingSquadIds = myTeamStoreInstance.getUsersIdsListByKey('trainingSquadIds');

    return (
        <>
            <div>
                <ChooseUsersTemplate
                usersListType={'trainingSquadIds'}
                usersIdsToShow={trainingSquadIds}
                usersInfos={possibleTrainingSquadUsers}
                UserButtonComponentType={ChooseShooterUserButton}
                />
            </div>
            <div>
                <ChooseShooterSubmitButton/>
                <ChooseShooterPreviousStageButton/>
            </div>
        </>
    )
}

export default observer(ChooseShooter);