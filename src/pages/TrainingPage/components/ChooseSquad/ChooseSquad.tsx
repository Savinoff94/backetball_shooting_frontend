import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import ChooseSquadChangeStageButton from "./ChooseSquadChangeStageButton";
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import ChooseUsersTemplate from "../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate";
import ChooseSquadUserButton from '../ChooseSquad/ChooseSquadUserButton';




function ChooseSquad() : JSX.Element  {

    const {selectTrainingSquadStoreInstance} = useContext(Context);

    useEffect(() => {

        const fetchData = async () => {

            await selectTrainingSquadStoreInstance.fetchPossibleTrainingSquadUsers();
        };

        fetchData();

    }, []);

    const possibleTrainingSquadUsers : UsersInfoById = selectTrainingSquadStoreInstance.getPossibleTrainingSquadUsers();

    const handleUserButtonClick = (id: string) => {

        if(selectTrainingSquadStoreInstance.isIdInTrainingSquadIds(id)) {

            selectTrainingSquadStoreInstance.removeFromTrainingSquadIds(id);
        }
        else {

            selectTrainingSquadStoreInstance.addToTrainingSquadIds(id);
        }

    }
    
    return (
        <>
        <ChooseUsersTemplate
        usersIdsToShow={Object.keys(possibleTrainingSquadUsers)}
        usersInfos={possibleTrainingSquadUsers}
        UserButtonComponentType={ChooseSquadUserButton}
        isUserSelectedChecker={selectTrainingSquadStoreInstance.isIdInTrainingSquadIds}
        handleClickUser={handleUserButtonClick}
        />
        <ChooseSquadChangeStageButton/>
        </>
    )
}

export default observer(ChooseSquad);