import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function SaveShootingSetButton() : JSX.Element {

    const {trainingBoardStore} = useContext(Context);

    const isSubmitButtonDisabled = !trainingBoardStore.isShootingSetValid();

    const submitHandler = async () => {

        await trainingBoardStore.saveCurrentShooterDataDb();
        trainingBoardStore.updateTrainingDataLocally();

        trainingBoardStore.resetCurrentMakes()
        trainingBoardStore.resetCurrentTries()
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