import {observer} from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import ChooseUsersTemplate from '../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate';
import ChooseUsersToRepresentUserButton from './ChooseUsersToRepresentUserButton';
import ChooseUsersToRepresentChangeStageButton from './ChooseUsersToRepresentChangeStageButton';
import Header1Styled from '../../../../StyledComponents/Header1Styled';
import FlexWrapper from '../../../../StyledComponents/FlexWrapper';
import LoadingBar from '../../../../StyledComponents/LoadingBar';
import useFetchMyTeamData from '../../../../hooks/useFetchMyTeamData';


function ChooseUsersToRepresentStatistics() {

    const {myTeamStoreInstance, multiStageFormsStore, watchMyStatiscicsStore} = useContext(Context);

    useFetchMyTeamData(() => {

        if(myTeamStoreInstance.hasNoFriends()) {

            const currentUserId = myTeamStoreInstance.getOnlyUserIdInTeam()

            watchMyStatiscicsStore.setRepresentedUsersIds([currentUserId]);

            multiStageFormsStore.setCurrentChartStage('selectChartTypeState');
        }
    })

    const possibleTrainingSquadUsers : UsersInfoById = myTeamStoreInstance.getMyTeamUsers();

    return (
        <>
        <Header1Styled classes='text-warmGray-100'>Select users</Header1Styled>
        <ChooseUsersTemplate
        usersListType={"representInChartUsersIds"}
        usersIdsToShow={Object.keys(possibleTrainingSquadUsers)}
        usersInfos={possibleTrainingSquadUsers}
        UserButtonComponentType={ChooseUsersToRepresentUserButton}
        />
        <FlexWrapper isColumn={true}>
            <ChooseUsersToRepresentChangeStageButton/>
        </FlexWrapper>

        {myTeamStoreInstance.getIsLoading() ? <LoadingBar/> : null}
        </>
    )

}

export default observer(ChooseUsersToRepresentStatistics);
