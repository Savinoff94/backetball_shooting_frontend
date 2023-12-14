import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseSpotSubmitButton() : JSX.Element {

    const {trainingBoardStore, trainingStagesStore} = useContext(Context);

    const isSubmitButtonDisabled = trainingBoardStore.isCurrentSpotSet()

    const submitHandler = () => {
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'shooting');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseSpotSubmitButton)