import { observer } from "mobx-react-lite";
import BasketballCourt from "../../../../commonComponents/BasketballCourt/BasketballCourt";
import { useContext } from "react";
import { Context } from '../../../../index';
import ChooseSpotToRepresentNextStageButton from "./ChooseSpotToRepresentNextStageButton";
import ChooseSpotToRepresentPreviousStageButton from "./ChooseSpotToRepresentPreviousStageButton";

function ChooseSpotToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context)

return (
    <>
    <BasketballCourt ifCheckedFunction={watchMyStatiscicsStore.isSpotKey} handleClickFunction={watchMyStatiscicsStore.setSpotKey}/>
    <ChooseSpotToRepresentNextStageButton/>
    <ChooseSpotToRepresentPreviousStageButton/>
    </>
)

}

export default observer(ChooseSpotToRepresent)