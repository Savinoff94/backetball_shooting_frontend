import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseShooterPreviousStageButton() : JSX.Element {

    const {multiStageFormsStore, trainingBoardStore, myTeamStoreInstance} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.hasNoFriends();

    const submitHandler = () => {

        trainingBoardStore.setCurrentShooter('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseSquad');
    }

    return (
        <ChangeStageButton
        key={'ChooseShooterPreviousStageButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        isPrimary = {false}
        />
    )
}

export default observer(ChooseShooterPreviousStageButton)