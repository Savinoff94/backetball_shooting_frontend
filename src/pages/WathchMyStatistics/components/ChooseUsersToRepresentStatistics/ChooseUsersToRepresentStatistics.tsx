import {observer} from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import ChooseUsersTemplate from '../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate';
import ChooseUsersToRepresentUserButton from './ChooseUsersToRepresentUserButton';
import ChooseUsersToRepresentChangeStageButton from './ChooseUsersToRepresentChangeStageButton';


function ChooseUsersToRepresentStatistics() {

    const {myTeamStoreInstance} = useContext(Context);

    useEffect(() => {

        const fetchData = async () => {

            await myTeamStoreInstance.fetchMyTeamUsers();
        };

        fetchData();

    }, []);

    const possibleTrainingSquadUsers : UsersInfoById = myTeamStoreInstance.getMyTeamUsers();

    return (
        <>
        <ChooseUsersTemplate
        usersListType={"representInChartUsersIds"}
        usersIdsToShow={Object.keys(possibleTrainingSquadUsers)}
        usersInfos={possibleTrainingSquadUsers}
        UserButtonComponentType={ChooseUsersToRepresentUserButton}
        />
        <ChooseUsersToRepresentChangeStageButton/>
        </>
    )

}

export default observer(ChooseUsersToRepresentStatistics);
