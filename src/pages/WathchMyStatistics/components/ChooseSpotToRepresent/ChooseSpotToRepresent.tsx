import { observer } from "mobx-react-lite";
import BasketballCourt from "../../../../commonComponents/BasketballCourt/BasketballCourt";
import { useContext } from "react";
import { Context } from '../../../../index';
import ChooseSpotToRepresentNextStageButton from "./ChooseSpotToRepresentNextStageButton";
import ChooseSpotToRepresentPreviousStageButton from "./ChooseSpotToRepresentPreviousStageButton";
import ShotsTypesButtons from '../../../../commonComponents/ShotsTypesButtons/ShotsTypesButtons';

function ChooseSpotToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context)

return (
    <>
    <ShotsTypesButtons onButtonClickHandle={watchMyStatiscicsStore.setSpotKey} isClickedChecker={watchMyStatiscicsStore.isSpotKey}/>
    <BasketballCourt ifCheckedFunction={watchMyStatiscicsStore.isSpotKey} handleClickFunction={watchMyStatiscicsStore.setSpotKey}/>
    <ChooseSpotToRepresentNextStageButton/>
    <ChooseSpotToRepresentPreviousStageButton/>
    </>
)

}

export default observer(ChooseSpotToRepresent)