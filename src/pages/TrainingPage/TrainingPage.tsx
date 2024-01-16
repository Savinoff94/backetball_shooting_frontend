import { useContext } from "react";
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';
import {TrainingStageType} from './types/trainingPageTypes'
import ChooseSquad from './components/ChooseSquad/ChooseSquad';
import ChooseShooter from "./components/ChooseShooter/ChooseShooter";
import ChooseSpot from "./components/ChooseSpot/ChooseSpot";
import Shooting from "./components/Shooting/Shooting";



function TrainingPage() {

    const {multiStageFormsStore} = useContext(Context);
    
    const getConditionalTrainingStep = (page: TrainingStageType) => {
        
        switch (page) {
            case 'chooseSquad':
                return <ChooseSquad/>

            case 'chooseShooter':
                return <ChooseShooter/>

            case 'chooseSpot':
                return <ChooseSpot/>

            case 'shooting':    
                return <Shooting/>
            
            default:
                return <ChooseSquad/>
        }
    }

    return (
        <>
        {getConditionalTrainingStep(multiStageFormsStore.getCurrentTrainingStage())}
        </>
    )
}

export default observer(TrainingPage)