import { observer } from "mobx-react-lite";
import ChooseSpotPreviousStageButton from "./ChooseSpotPreviousStageButton";
import ChooseSpotSubmitButton from "./ChooseSpotSubmitButton";
import { useContext } from "react";
import { Context } from '../../../../index';
import BasketballCourtSVG from '../../../../commonComponents/BasketballCourt/BasketballCourtSVG'
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";
import Header1Styled from "../../../../StyledComponents/Header1Styled";

function ChooseSpot() {

    const {trainingBoardStore} = useContext(Context);

    const ifCheckedFunction = (id: string) => {

        return !trainingBoardStore.isCurrentSpot(id)
    }

    return (
        <>  
            <Header1Styled classes="text-warmGray-100">Choose spot</Header1Styled>
            <div className="w-full flex h-4/6 justify-center">
                <BasketballCourtSVG ifCheckedFunction={ifCheckedFunction} onClickFunction={trainingBoardStore.setCurrentSpot}/>
            </div>
            <FlexWrapper isColumn={true}>
                <ChooseSpotSubmitButton/>
                <ChooseSpotPreviousStageButton/>
            </FlexWrapper>
        </>
    )

}

export default observer(ChooseSpot);