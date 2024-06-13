import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import MakesInput from "./components/MakesInput";
import TriesInput from "./components/TriesInput";
import ChangeShooterButton from "./components/navButtons/ChangeShooterButton";
import ChangeSpotButton from "./components/navButtons/ChangeSpotButton";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";
import LoadingBar from "../../../../StyledComponents/LoadingBar";
import SaveShootingSetButton from "./components/SaveShootingSetButton";
import SaveResultModal from "./components/SaveResultModal";
import VoiceInterface from "./components/VoiceInterface";


function Shooting() {
    
    const {trainingBoardStore} = useContext(Context);

    useEffect(() => {
        trainingBoardStore.resetCurrentMakes();
        trainingBoardStore.resetCurrentTries();
    
      
    }, [])

    return (
        <>
            <div className="absolute top-[-120px] flex justify-center w-full h-fit">
                <VoiceInterface/>
            </div>
            
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

            <SaveResultModal/>
        </>
    )
}

export default observer(Shooting)