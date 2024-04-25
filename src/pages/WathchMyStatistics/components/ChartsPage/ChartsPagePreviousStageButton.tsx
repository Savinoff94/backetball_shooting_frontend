import ChangeStageButton from "../../../TrainingPage/components/commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChartsPagePreviousStageButton() : JSX.Element {

    const {multiStageFormsStore, watchMyStatiscicsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {

        if(!watchMyStatiscicsStore.isChartRepresentationDependsOnSpotType(watchMyStatiscicsStore.getChartType())) {

            multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectRepresentedTimeState');

            return;
        }

        multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectSpotTypeState');
    }

    return (
        <ChangeStageButton
        key={'ChartsPagePreviousStageButton'}
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'Submit'}
        />
    )
}

export default observer(ChartsPagePreviousStageButton)