import { observer } from "mobx-react-lite";
import ChooseSpotPreviousStageButton from "./ChooseSpotPreviousStageButton";
import ChooseSpotSubmitButton from "./ChooseSpotSubmitButton";
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
            <div className="w-full flex h-4/6 justify-center">
                <BasketballCourtSVG ifCheckedFunction={ifCheckedFunction} onClickFunction={trainingBoardStore.setCurrentSpot}/>
            </div>
            <div>
                <ChooseSpotSubmitButton/>
                <ChooseSpotPreviousStageButton/>
            </div>
        </>
    )

}

export default observer(ChooseSpot);