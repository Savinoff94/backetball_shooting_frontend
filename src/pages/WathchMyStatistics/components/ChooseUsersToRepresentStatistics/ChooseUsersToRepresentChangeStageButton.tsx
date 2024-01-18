import ChangeStageButton from "../../../TrainingPage/components/commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChooseUsersToRepresentChangeStageButton() : JSX.Element {

    const {myTeamStoreInstance, multiStageFormsStore, watchMyStatiscicsStore} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.getUsersIdsListByKey('representInChartUsersIds').length === 0;

    const submitHandler = () => {
        
        multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectChartTypeState');
        watchMyStatiscicsStore.setRepresentedUsersIds(myTeamStoreInstance.getUsersIdsListByKey('representInChartUsersIds'));
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseUsersToRepresentChangeStageButton)