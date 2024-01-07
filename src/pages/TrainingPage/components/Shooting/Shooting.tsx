import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import MakesInput from "./components/MakesInput";
import TriesInput from "./components/TriesInput";
import ContinueWithNewShooterButton from "./components/ContinueWithNewShooterButton";
import ContinueWithNewSpotButton from "./components/ContinueWithNewSpotButton";

function Shooting() {

    const {trainingBoardStore} = useContext(Context);

    trainingBoardStore.resetCurrentMakes();
    trainingBoardStore.resetCurrentTries();

    return (
        <>
            <div>
                <MakesInput/>
                <span>/</span>
                <TriesInput/>
            </div>
            <div>
                <button onClick={() => trainingBoardStore.shotMade()}>Make</button>
                <button onClick={() => trainingBoardStore.shotMissed()}>Miss</button>
            </div>
            <div>
                <div>
                    <ContinueWithNewShooterButton/>
                    <ContinueWithNewSpotButton/>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default observer(Shooting)