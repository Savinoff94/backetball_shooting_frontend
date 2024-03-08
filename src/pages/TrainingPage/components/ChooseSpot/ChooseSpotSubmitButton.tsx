import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseSpotSubmitButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = trainingBoardStore.isCurrentSpotSet()

    const submitHandler = () => {
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'shooting');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        isPrimary = {true}
        />
    )
}

export default observer(ChooseSpotSubmitButton)