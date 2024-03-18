import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import ChooseSpotToRepresentNextStageButton from "./ChooseSpotToRepresentNextStageButton";
import ChooseSpotToRepresentPreviousStageButton from "./ChooseSpotToRepresentPreviousStageButton";
import ShotsTypesButtons from '../../../../commonComponents/ShotsTypesButtons/ShotsTypesButtons';
import BasketballCourtSVG from "../../../../commonComponents/BasketballCourt/BasketballCourtSVG";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";

function ChooseSpotToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context)

    const ifCheckedForSpotFunction = (spotKey: string) => {

        return !watchMyStatiscicsStore.isSpotKey(spotKey);
    }

return (
    <>
    <ShotsTypesButtons onButtonClickHandle={watchMyStatiscicsStore.setSpotKey} isClickedChecker={watchMyStatiscicsStore.isSpotKey}/>
    <div className="flex justify-center">
        <BasketballCourtSVG ifCheckedFunction={ifCheckedForSpotFunction} onClickFunction={watchMyStatiscicsStore.setSpotKey}/>
    </div>
    
    <FlexWrapper isColumn={true}>
        <ChooseSpotToRepresentNextStageButton/>
        <ChooseSpotToRepresentPreviousStageButton/>
    </FlexWrapper>
    </>
)

}

export default observer(ChooseSpotToRepresent)