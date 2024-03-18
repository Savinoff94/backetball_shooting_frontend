import ChangeStageButton from "../../../TrainingPage/components/commonComponents/ChangeStageButton/ChangeStageButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';




function ChartsPageToBegginingButton() : JSX.Element {

    const {multiStageFormsStore} = useContext(Context);

    const isSubmitButtonDisabled = false;

    const submitHandler = () => {
        
        multiStageFormsStore.submitChartStage(!isSubmitButtonDisabled, 'selectUsersState');
    }

    return (
        <ChangeStageButton
        handleClick = {submitHandler}
        isDisabled = {isSubmitButtonDisabled}
        buttonText = {'To the begining'}
        isPrimary = {false}
        />
    )
}

export default observer(ChartsPageToBegginingButton)