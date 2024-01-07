import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ContinueWithNewShooterButton() : JSX.Element {

    const {trainingBoardStore, trainingStagesStore} = useContext(Context);

    const isSubmitButtonDisabled = !trainingBoardStore.isShootingSetValid();

    const submitHandler = async() => {

        const currentShooter = trainingBoardStore.getCurrentShooter();
        const currentSpot = trainingBoardStore.getCurrentSpot();
        const currentTries = trainingBoardStore.getCurrentTries();
        const currentMakes = trainingBoardStore.getCurrentMakes();

        await trainingBoardStore.saveCurrentShooterDataDb(currentShooter, currentSpot, currentTries, currentMakes);
        trainingBoardStore.updateTrainingDataLocally();

        trainingBoardStore.setCurrentSpot('');

        trainingBoardStore.setCurrentShooter('');
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'chooseShooter');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Continue with new shooter'}
        />
    )
}

export default observer(ContinueWithNewShooterButton)