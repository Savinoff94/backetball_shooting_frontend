import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChooseSquadChangeStageButton() : JSX.Element {

    const {selectTrainingSquadStoreInstance, trainingStagesStore} = useContext(Context);

    const isSubmitButtonDisabled = selectTrainingSquadStoreInstance.getTrainingSquadIds().length === 0;

    const submitHandler = () => {
        
        trainingStagesStore.submitStage(!isSubmitButtonDisabled, 'chooseShooter');
        
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