import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseShooterSubmitButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = trainingBoardStore.isCurrentShooterSet()

    const submitHandler = () => {
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    return (
        <ChangeStageButton
        key={'ChooseShooterSubmitButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseShooterSubmitButton);