import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import ChooseSquadChangeStageButton from "./ChooseSquadChangeStageButton";
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import ChooseUsersTemplate from "../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate";
import ChooseSquadUserButton from '../ChooseSquad/ChooseSquadUserButton';
import Header1Styled from "../../../../StyledComponents/Header1Styled";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";


function ChooseSquad() : JSX.Element  {

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
        <Header1Styled>Choose your squad</Header1Styled>
        <ChooseUsersTemplate
        usersListType={"trainingSquadIds"}
        usersIdsToShow={Object.keys(possibleTrainingSquadUsers)}
        usersInfos={possibleTrainingSquadUsers}
        UserButtonComponentType={ChooseSquadUserButton}
        />
        <FlexWrapper isColumn={true}>
            <ChooseSquadChangeStageButton/>
        </FlexWrapper>
        </>
    )
}

export default observer(ChooseSquad);