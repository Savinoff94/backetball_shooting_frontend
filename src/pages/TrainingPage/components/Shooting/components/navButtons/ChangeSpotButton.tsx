import ChangeStageButton from "../../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../../index';
import {observer} from 'mobx-react-lite';

function ChangeSpotButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const onSuccess = () => {
        
        trainingBoardStore.setCurrentSpot('');
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSpot');
    }

    const submitHandler = () => {

        if(trainingBoardStore.isShootingSetValid()) {

            trainingBoardStore.modalVisibilityController.toggleModalVisibility()
            trainingBoardStore.modalVisibilityController.setSubmitModalCallback(onSuccess)
            trainingBoardStore.modalVisibilityController.setCancelModalCallback(onSuccess)
            return
        }
        
        onSuccess()
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