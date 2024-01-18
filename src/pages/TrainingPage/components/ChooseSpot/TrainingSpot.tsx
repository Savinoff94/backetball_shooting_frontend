import ShootingSpot from "../../../../commonComponents/ShootingSpot/ShootingSpot";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from '../../../../index';
import {chartSpotKeyType} from '../../../WathchMyStatistics/WatchMyStatisticsPageTypes'


function TrainingSpot({ spotIndex }: { spotIndex: chartSpotKeyType }) {

    const {trainingBoardStore} = useContext(Context);

    return (
        <ShootingSpot
        isClickedFunction = {trainingBoardStore.isCurrentSpot}
        spotIndex = {spotIndex}
        handlerOnClick = {trainingBoardStore.setCurrentSpot}
        />
    )
}

export default observer(TrainingSpot);