import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseShooterSubmitButton() : JSX.Element {

    const {trainingBoardStore, trainingStagesStore} = useContext(Context);

    const isSubmitButtonDisabled = trainingBoardStore.isCurrentShooterSet()

    const submitHandler = () => {
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseShooterSubmitButton);