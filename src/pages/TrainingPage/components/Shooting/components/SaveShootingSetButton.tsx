import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function SaveShootingSetButton() : JSX.Element {

    const {trainingBoardStore} = useContext(Context);

    const isSubmitButtonDisabled = !trainingBoardStore.isShootingSetValid();

    const submitHandler = async () => {

        const currentShooter = trainingBoardStore.getCurrentShooter();
        const currentSpot = trainingBoardStore.getCurrentSpot();
        const currentTries = trainingBoardStore.getCurrentTries();
        const currentMakes = trainingBoardStore.getCurrentMakes();

        await trainingBoardStore.saveCurrentShooterDataDb(currentShooter, currentSpot, currentTries, currentMakes);
        trainingBoardStore.updateTrainingDataLocally();
        
    }

    return (
        <ChangeStageButton
        key={'SaveShootingSet'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Save'}
        />
    )
}

export default observer(SaveShootingSetButton)