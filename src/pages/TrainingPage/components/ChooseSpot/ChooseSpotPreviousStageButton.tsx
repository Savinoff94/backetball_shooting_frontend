import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseSpotPreviousStageButton() : JSX.Element {

    const {trainingStagesStore, trainingBoardStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        trainingBoardStore.setCurrentSpot('');
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'chooseShooter');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        />
    )
}

export default observer(ChooseSpotPreviousStageButton)