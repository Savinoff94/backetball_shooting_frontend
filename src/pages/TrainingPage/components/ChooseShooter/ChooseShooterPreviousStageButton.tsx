import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseShooterPreviousStageButton() : JSX.Element {

    const {trainingStagesStore, trainingBoardStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        trainingBoardStore.setCurrentShooter('');
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'chooseSquad');
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