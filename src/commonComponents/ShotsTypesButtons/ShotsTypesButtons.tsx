import { observer } from "mobx-react-lite";
import {shotsTypesArray, spotCategoryKeyType} from '../../pages/WathchMyStatistics/WatchMyStatisticsPageTypes';
import LiButton from "../LiButton/Libutton";

type ShotsTypesButtonsProps = {

    onButtonClickHandle: (shotType: spotCategoryKeyType) => void,
    isClickedChecker: (shotType: spotCategoryKeyType) => boolean
}


function ShotsTypesButtons({onButtonClickHandle, isClickedChecker}: ShotsTypesButtonsProps) {

    return (
        <ul className="flex gap-1 flex-wrap justify-center">
            {
                shotsTypesArray.map((shotType) => {

                    const isClicked = isClickedChecker(shotType);

                    return (

                        <LiButton key={shotType} isClicked={isClicked} handleClick={() => onButtonClickHandle(shotType)}>{shotType}</LiButton>
                    )
                })
            }
        </ul>
    )
}

export default observer(ShotsTypesButtons);