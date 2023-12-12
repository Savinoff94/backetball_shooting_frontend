import { useState } from "react";
import ChooseSquad from './components/ChooseSquad/ChooseSquad';


const trainingSteps = ['chooseSquad', 'chooseShooter', 'chooseSpot', 'shooting'];

export default function TrainingPage() {
    
    const [currentTrainingStep, setCurrentTrainingStep] = useState<string>('chooseSquad');


    const getConditionalTrainingStep = (page:string) => {
        
        switch (page) {
            case 'chooseSquad':
                return <ChooseSquad/>

            // case 'chooseShooter':
            //     return <ChooseShooter/>

            // case 'chooseSpot':
            //     return <ChooseSpot/>

            // case 'shooting':    
            //     return <Shooting/>
            
            // default:
            //     return <ChooseSquad/>
        }
    }

    return (
        <>
        {getConditionalTrainingStep(currentTrainingStep)}
        </>
    )
}