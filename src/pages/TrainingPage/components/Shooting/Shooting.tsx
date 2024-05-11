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
            
            <FlexWrapper classes="gap-0 m-5">

                <FlexWrapper classes="items-center justify-center" isColumn={true}>
                    <MakesInput/>
                    <button className="bg-green-800 rounded-lg text-warmGray-100 font-sofia w-2/3 h-16" onClick={() => trainingBoardStore.shotMade()}>Make</button>
                </FlexWrapper>
                
                <FlexWrapper classes="items-center justify-center" isColumn={true}>
                    <TriesInput/>
                    <button className="bg-red-500 rounded-lg text-warmGray-100 font-sofia w-2/3 h-16" onClick={() => trainingBoardStore.shotMissed()}>Miss</button>
                </FlexWrapper>
                    
            </FlexWrapper>
            <div>
                <FlexWrapper isColumn={true}>
                    <ContinueWithNewShooterButton/>
                    <ChangeStageButton
                    key={"StartWithNewSpot"}
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