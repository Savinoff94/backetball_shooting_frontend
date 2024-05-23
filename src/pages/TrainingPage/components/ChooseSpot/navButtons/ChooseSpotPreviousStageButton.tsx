import ChangeStageButton from "../../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';

function ChooseSpotPreviousStageButton() : JSX.Element {

    const {multiStageFormsStore, trainingBoardStore, myTeamStoreInstance} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.hasNoFriends();

    const submitHandler = () => {

        trainingBoardStore.setCurrentSpot('');
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseShooter');
    }

    return (
        <ChangeStageButton
        key={'ChooseSpotPreviousStageButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Back'}
        isPrimary = {false}
        />
    )
}

export default observer(ChooseSpotPreviousStageButton)