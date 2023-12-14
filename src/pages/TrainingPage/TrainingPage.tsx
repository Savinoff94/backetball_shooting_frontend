import { useContext } from "react";
import { Context } from '../../index';
import ChooseSquad from './components/ChooseSquad/ChooseSquad';
import {observer} from 'mobx-react-lite';
import {TrainingStageType} from './types/trainingPageTypes'



function TrainingPage() {

    const {trainingStagesStore} = useContext(Context);
    
    const getConditionalTrainingStep = (page: TrainingStageType) => {
        
        switch (page) {
            case 'chooseSquad':
                return <ChooseSquad/>

            // case 'chooseShooter':
            //     return <ChooseShooter/>

            // case 'chooseSpot':
            //     return <ChooseSpot/>

            // case 'shooting':    
            //     return <Shooting/>
            
            default:
        
                return <ChooseSquad/>
        }
    }

    return (
        <>
        {getConditionalTrainingStep(trainingStagesStore.getCurrentStage())}
        </>
    )
}

export default observer(TrainingPage)