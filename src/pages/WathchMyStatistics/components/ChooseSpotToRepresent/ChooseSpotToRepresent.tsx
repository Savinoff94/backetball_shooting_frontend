import { observer } from "mobx-react-lite";
import BasketballCourt from "../../../../commonComponents/BasketballCourt/BasketballCourt";
import { useContext } from "react";
import { Context } from '../../../../index';
import ChooseSpotToRepresentNextStageButton from "./ChooseSpotToRepresentNextStageButton";
import ChooseSpotToRepresentPreviousStageButton from "./ChooseSpotToRepresentPreviousStageButton";
import ShotsTypesButtons from '../../../../commonComponents/ShotsTypesButtons/ShotsTypesButtons';
import BasketballCourtSVG from "../../../../commonComponents/BasketballCourt/BasketballCourtSVG";

function ChooseSpotToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context)

    const ifCheckedForSpotFunction = (spotKey: string) => {

        return !watchMyStatiscicsStore.isSpotKey(spotKey);
    }

return (
    <>
    <ShotsTypesButtons onButtonClickHandle={watchMyStatiscicsStore.setSpotKey} isClickedChecker={watchMyStatiscicsStore.isSpotKey}/>
    <BasketballCourtSVG ifCheckedFunction={ifCheckedForSpotFunction} onClickFunction={watchMyStatiscicsStore.setSpotKey}/>
    <ChooseSpotToRepresentNextStageButton/>
    <ChooseSpotToRepresentPreviousStageButton/>
    </>
)

}

export default observer(ChooseSpotToRepresent)