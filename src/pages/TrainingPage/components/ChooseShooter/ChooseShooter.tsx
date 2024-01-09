import { useContext } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import ChooseShooterSubmitButton from "./ChooseShooterSubmitButton";
import ChooseShooterPreviousStageButton from "./ChooseShooterPreviousStageButton";
import ChooseUsersTemplate from "../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate";
import ChooseShooterUserButton from "./ChooseShooterUserButton";

function ChooseShooter() : JSX.Element {

    const {selectTrainingSquadStoreInstance, trainingBoardStore} = useContext(Context);

    const possibleTrainingSquadUsers : UsersInfoById = selectTrainingSquadStoreInstance.getPossibleTrainingSquadUsers();

    const trainingSquadIds = selectTrainingSquadStoreInstance.getTrainingSquadIds();

    return (
        <>
            <div>
                <ChooseUsersTemplate
                usersIdsToShow={trainingSquadIds}
                usersInfos={possibleTrainingSquadUsers}
                UserButtonComponentType={ChooseShooterUserButton}
                isUserSelectedChecker={trainingBoardStore.isCurrentShooter}
                handleClickUser={trainingBoardStore.setCurrentShooter}
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