import { observer } from "mobx-react-lite";
import TrainingSpot from "./TrainingSpot";
import ChooseSpotPreviousStageButton from "./ChooseSpotPreviousStageButton";
import ChooseSpotSubmitButton from "./ChooseSpotSubmitButton";



function ChooseSpot() {

    return (
        <>
            <div>
                <TrainingSpot spotIndex={'s1'}/>
                <TrainingSpot spotIndex={'s2'}/>
                <TrainingSpot spotIndex={'s3'}/>
                <TrainingSpot spotIndex={'s4'}/>
                <TrainingSpot spotIndex={'s5'}/>
            </div>
            <div>
                <ChooseSpotPreviousStageButton/>
                <ChooseSpotSubmitButton/>
            </div>
        </>
    )

}

export default observer(ChooseSpot);