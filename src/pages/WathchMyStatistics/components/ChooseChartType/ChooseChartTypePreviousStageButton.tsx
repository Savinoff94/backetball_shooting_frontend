import ChangeStageButton from "../../../TrainingPage/components/commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseChartTypePreviousStageButton() {

    const {multiStageFormsStore, myTeamStoreInstance} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.hasNoFriends();

    const submitHandler = () => {
        
        multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectUsersState');
    }


    return (
        <ChangeStageButton
        key={'ChooseChartTypePreviousStageButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        isPrimary = {false}
        />
    )
}

export default observer(ChooseChartTypePreviousStageButton)
