import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import MakesInput from "./components/MakesInput";
import TriesInput from "./components/TriesInput";
import ContinueWithNewShooterButton from "./components/ContinueWithNewShooterButton";
import ContinueWithNewSpotButton from "./components/ContinueWithNewSpotButton";
import ChangeStageButton from "../commonComponents/ChangeStageButton/ChangeStageButton";

function Shooting() {

    const {trainingBoardStore, multiStageFormsStore} = useContext(Context);

    trainingBoardStore.resetCurrentMakes();
    trainingBoardStore.resetCurrentTries();

    return (
        <>
            <div className="flex">
                <MakesInput/>
                <span> / </span>
                <TriesInput/>
            </div>
            <div>
                <button onClick={() => trainingBoardStore.shotMade()}>Make</button>
                <button onClick={() => trainingBoardStore.shotMissed()}>Miss</button>
            </div>
            <div>
                <div>
                    <ContinueWithNewShooterButton/>
                    <ChangeStageButton
                    handleClick = {() => {multiStageFormsStore.submitTrainingStage(true, 'chooseSpot');}}
                    isDisabled = {false}
                    buttonText = {'Back'}
                    isPrimary = {false}
                    />
                    <ContinueWithNewSpotButton/>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default observer(Shooting)