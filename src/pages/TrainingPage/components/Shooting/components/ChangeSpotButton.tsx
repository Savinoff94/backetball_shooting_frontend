import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ChangeSpotButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        trainingBoardStore.resetCurrentMakes()
        trainingBoardStore.resetCurrentTries()

        trainingBoardStore.setCurrentSpot('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    return (
        <ChangeStageButton
        key={'ChangeSpotButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Select other spot'}
        isPrimary = {false}
        />
    )
}

export default observer(ChangeSpotButton)