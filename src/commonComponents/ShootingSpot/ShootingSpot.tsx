import {chartSpotKeyType} from '../../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'
import { observer } from "mobx-react-lite";



type ShootingSpotProps = {
    isClickedFunction: (key: chartSpotKeyType) => boolean,
    handlerOnClick: (key: chartSpotKeyType) => void,
    spotIndex: chartSpotKeyType
}

function ShootingSpot({isClickedFunction, handlerOnClick, spotIndex} : ShootingSpotProps) {

    const borderColor = isClickedFunction(spotIndex) ? 'green' : 'red';

    return (
        <button style={{borderColor}} onClick={() => {handlerOnClick(spotIndex)}}>
            
        </button>
    )
}

export default observer(ShootingSpot);