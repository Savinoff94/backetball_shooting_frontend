import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ContinueWithNewSpotButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = !trainingBoardStore.isShootingSetValid();

    const submitHandler = async () => {

        const currentShooter = trainingBoardStore.getCurrentShooter();
        const currentSpot = trainingBoardStore.getCurrentSpot();
        const currentTries = trainingBoardStore.getCurrentTries();
        const currentMakes = trainingBoardStore.getCurrentMakes();

        await trainingBoardStore.saveCurrentShooterDataDb(currentShooter, currentSpot, currentTries, currentMakes);
        trainingBoardStore.updateTrainingDataLocally();

        trainingBoardStore.setCurrentSpot('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    return (
        <ChangeStageButton
        key={'ContinueWithNewSpotButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Continue with new spot'}
        />
    )
}

export default observer(ContinueWithNewSpotButton)