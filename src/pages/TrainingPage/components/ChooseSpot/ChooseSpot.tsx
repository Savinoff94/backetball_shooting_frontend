import { observer } from "mobx-react-lite";
import TrainingSpot from "./TrainingSpot";
import ChooseSpotPreviousStageButton from "./ChooseSpotPreviousStageButton";
import ChooseSpotSubmitButton from "./ChooseSpotSubmitButton";
import BasketballCourt from "../../../../commonComponents/BasketballCourt/BasketballCourt";
import { useContext } from "react";
import { Context } from '../../../../index';

function ChooseSpot() {

    const {trainingBoardStore} = useContext(Context);

    return (
        <>
            <BasketballCourt ifCheckedFunction={trainingBoardStore.isCurrentSpot} handleClickFunction={trainingBoardStore.setCurrentSpot}/>
            <div>
                <ChooseSpotPreviousStageButton/>
                <ChooseSpotSubmitButton/>
            </div>
        </>
    )

}

export default observer(ChooseSpot);