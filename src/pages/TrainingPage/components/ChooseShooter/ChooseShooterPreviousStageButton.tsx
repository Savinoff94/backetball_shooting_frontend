import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseShooterPreviousStageButton() : JSX.Element {

    const {multiStageFormsStore, trainingBoardStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        trainingBoardStore.setCurrentShooter('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSquad');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        />
    )
}

export default observer(ChooseShooterPreviousStageButton)