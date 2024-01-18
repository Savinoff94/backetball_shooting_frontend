import ChangeStageButton from "../../../TrainingPage/components/commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChooseTimeToRepresentNextStageButton() : JSX.Element {

    const {multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {
        
        multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectSpotTypeState');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChooseTimeToRepresentNextStageButton)