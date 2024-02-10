import { observer } from "mobx-react-lite";
import TrainingSpot from "./TrainingSpot";
import ChooseSpotPreviousStageButton from "./ChooseSpotPreviousStageButton";
import ChooseSpotSubmitButton from "./ChooseSpotSubmitButton";
import BasketballCourt from "../../../../commonComponents/BasketballCourt/BasketballCourt";
import { useContext } from "react";
import { Context } from '../../../../index';
import BasketballCourtSVG from '../../../../commonComponents/BasketballCourt/BasketballCourtSVG'

function ChooseSpot() {

    const {trainingBoardStore} = useContext(Context);

    const ifCheckedFunction = (id: string) => {

        return !trainingBoardStore.isCurrentSpot(id)
    }

    return (
        <>
            <BasketballCourtSVG ifCheckedFunction={ifCheckedFunction} onClickFunction={trainingBoardStore.setCurrentSpot}/>
            <div>
                <ChooseSpotPreviousStageButton/>
                <ChooseSpotSubmitButton/>
            </div>
        </>
    )

}

export default observer(ChooseSpot);