import {observer} from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import ChooseUsersTemplate from '../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate';
import ChooseUsersToRepresentUserButton from './ChooseUsersToRepresentUserButton';
import ChooseUsersToRepresentChangeStageButton from './ChooseUsersToRepresentChangeStageButton';
import Header1Styled from '../../../../StyledComponents/Header1Styled';
import FlexWrapper from '../../../../StyledComponents/FlexWrapper';


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
        <Header1Styled>Select users</Header1Styled>
        <ChooseUsersTemplate
        usersListType={"representInChartUsersIds"}
        usersIdsToShow={Object.keys(possibleTrainingSquadUsers)}
        usersInfos={possibleTrainingSquadUsers}
        UserButtonComponentType={ChooseUsersToRepresentUserButton}
        />
        <FlexWrapper isColumn={true}>
            <ChooseUsersToRepresentChangeStageButton/>
        </FlexWrapper>
        </>
    )

}

export default observer(ChooseUsersToRepresentStatistics);
