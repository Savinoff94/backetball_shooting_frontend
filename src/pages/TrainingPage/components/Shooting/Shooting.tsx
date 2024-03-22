import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import MakesInput from "./components/MakesInput";
import TriesInput from "./components/TriesInput";
import ContinueWithNewShooterButton from "./components/ContinueWithNewShooterButton";
import ContinueWithNewSpotButton from "./components/ContinueWithNewSpotButton";
import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";
import LoadingBar from "../../../../StyledComponents/LoadingBar";

function Shooting() {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    trainingBoardStore.resetCurrentMakes();
    trainingBoardStore.resetCurrentTries();

    return (
        <>
            <FlexWrapper>
                <MakesInput/>
                <TriesInput/>
            </FlexWrapper>
            <div className="m-4 flex gap-4 mt-8 mb-8">
                <button className="bg-green-800 rounded-full text-white font-sofia w-1/2 h-16" onClick={() => trainingBoardStore.shotMade()}>Make</button>
                <button className="bg-orange-600 rounded-full text-white font-sofia w-1/2 h-16" onClick={() => trainingBoardStore.shotMissed()}>Miss</button>
            </div>
            <div>
                <FlexWrapper isColumn={true}>
                    <ContinueWithNewShooterButton/>
                    <ChangeStageButton
                    handleClick = {() => {multiStageFormsStore.submitTrainingStage(true, 'chooseSpot');}}
                    isDisabled = {false}
                    buttonText = {'Back'}
                    isPrimary = {false}
                    />
                    <ContinueWithNewSpotButton/>
                </FlexWrapper>
            </div>

            {trainingBoardStore.getIsLoading() ? <LoadingBar/> : null}
        </>
    )
}

export default observer(Shooting)