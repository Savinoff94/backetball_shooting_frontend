import { useContext } from "react";
import { Context } from '../../../../index';
import {UsersInfoById} from '../../../Friends/types/friendsTypes';
import {observer} from 'mobx-react-lite';
import ChooseShooterSubmitButton from "./navButtons/ChooseShooterSubmitButton";
import ChooseShooterPreviousStageButton from "./navButtons/ChooseShooterPreviousStageButton";
import ChooseUsersTemplate from "../../../../commonComponents/ChooseUsersTemplate/ChooseUsersTemplate";
import ChooseShooterUserButton from "./ChooseShooterUserButton";
import Header1Styled from "../../../../StyledComponents/Header1Styled";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";

function ChooseShooter() : JSX.Element {

    const {myTeamStoreInstance} = useContext(Context);

    const possibleTrainingSquadUsers : UsersInfoById = myTeamStoreInstance.getMyTeamUsers();

    const trainingSquadIds = myTeamStoreInstance.getUsersIdsListByKey('trainingSquadIds');

    return (
        <>
            <Header1Styled classes="text-warmGray-100">Choose shooter</Header1Styled>
            <div>
                <ChooseUsersTemplate
                usersListType={'trainingSquadIds'}
                usersIdsToShow={trainingSquadIds}
                usersInfos={possibleTrainingSquadUsers}
                UserButtonComponentType={ChooseShooterUserButton}
                />
            </div>
            <FlexWrapper isColumn={true}>
                <ChooseShooterSubmitButton/>
                <ChooseShooterPreviousStageButton/>
            </FlexWrapper>
        </>
    )
}

export default observer(ChooseShooter);