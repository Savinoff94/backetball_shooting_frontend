import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ContinueWithNewShooterButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        trainingBoardStore.resetCurrentMakes();
        trainingBoardStore.resetCurrentTries();

        trainingBoardStore.setCurrentSpot('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    return (
        <ChangeStageButton
        key={'ContinueWithNewShooterButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        />
    )
}

export default observer(ContinueWithNewShooterButton)