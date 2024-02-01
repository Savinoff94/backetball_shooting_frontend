import { observer } from "mobx-react-lite";
import {shotsTypesArray, spotCategoryKeyType} from '../../pages/WathchMyStatistics/WatchMyStatisticsPageTypes';

type ShotsTypesButtonsProps = {

    onButtonClickHandle: (shotType: spotCategoryKeyType) => void,
    isClickedChecker: (shotType: spotCategoryKeyType) => boolean
}


function ShotsTypesButtons({onButtonClickHandle, isClickedChecker}: ShotsTypesButtonsProps) {

    return (
        <div>
            {
                shotsTypesArray.map((shotType) => {

                    const isClicked = isClickedChecker(shotType);

                    const color = isClicked ? 'green' : 'grey'
                    return (

                        <button style={{color}} onClick={() => onButtonClickHandle(shotType)}>{shotType}</button>
                    )
                })
            }
        </div>
    )
}

export default observer(ShotsTypesButtons);