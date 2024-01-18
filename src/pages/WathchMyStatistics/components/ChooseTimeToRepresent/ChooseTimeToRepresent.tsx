import {observer} from 'mobx-react-lite';
import {Context} from '../../../../index'
import { useContext } from "react";
import LiButton from '../../../../commonComponents/LiButton/Libutton';
import {ChartRepresentedTimeType, chartRepresentedTimesArray, chartRepresentedTimesNamesDict } from '../../WatchMyStatisticsPageTypes';
import ChooseTimeToRepresentNextStageButton from './ChooseTimeToRepresentNextStageButton';
import ChooseTimeToRepresentPreviousStageButton from './ChooseTimeToRepresentPreviousStageButton';

function ChooseTimeToRepresent() {

    const {watchMyStatiscicsStore} = useContext(Context);


    const handleOnClick = (timeKey: ChartRepresentedTimeType) => {

        watchMyStatiscicsStore.setTimeKey(timeKey);
    }

    return (
        <>
        <ul>
            {chartRepresentedTimesArray.map((timeKey) => {

                return (
                    <LiButton 
                    handleClick={() => handleOnClick(timeKey)}
                    isClicked={watchMyStatiscicsStore.isSelectedTimeType(timeKey)}>
                        {chartRepresentedTimesNamesDict[timeKey]}
                    </LiButton>

                )
            })}
        </ul>
        <ChooseTimeToRepresentNextStageButton/>
        <ChooseTimeToRepresentPreviousStageButton/>
        </>
    )
}

export default observer(ChooseTimeToRepresent)


