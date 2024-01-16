import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChooseSquadChangeStageButton() : JSX.Element {

    const {myTeamStoreInstance, multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = myTeamStoreInstance.getUsersIdsListByKey('trainingSquadIds').length === 0;

    const submitHandler = () => {
        
        multiStageFormsStore.submitTrainingStage(!isSubmitButtonDisabled, 'chooseShooter');
        
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseSquadChangeStageButton)