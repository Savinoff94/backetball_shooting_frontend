import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import MakesInput from "./components/MakesInput";
import TriesInput from "./components/TriesInput";
import ChangeShooterButton from "./components/ChangeShooterButton";
import ChangeSpotButton from "./components/ChangeSpotButton";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";
import LoadingBar from "../../../../StyledComponents/LoadingBar";
import SaveShootingSetButton from "./components/SaveShootingSetButton";

function Shooting() {

    const {trainingBoardStore} = useContext(Context);

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
                    <SaveShootingSetButton/>
                    <ChangeShooterButton/>
                    <ChangeSpotButton/>
                </FlexWrapper>
            </div>

            {trainingBoardStore.getIsLoading() ? <LoadingBar/> : null}
        </>
    )
}

export default observer(Shooting)