import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ChangeShooterButton() : JSX.Element {

    const {trainingBoardStore, multiStageFormsStore, myTeamStoreInstance} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.hasNoFriends();

    const submitHandler = () => {

        trainingBoardStore.resetCurrentMakes()
        trainingBoardStore.resetCurrentTries()


        trainingBoardStore.setCurrentSpot('');

        trainingBoardStore.setCurrentShooter('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseShooter');
    }

    return (
        <ChangeStageButton
        key={'ChangeShooterButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Select other shooter'}
        isPrimary = {false}
        />
    )
}

export default observer(ChangeShooterButton)