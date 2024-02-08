import {observer} from 'mobx-react-lite';
import {ChartRepresentationType, chartTypesArray, chartsNamesDict } from '../../WatchMyStatisticsPageTypes';
import {Context} from '../../../../index'
import { useContext } from "react";
import LiButton from '../../../../commonComponents/LiButton/Libutton';
import {ChartRepresentedTimeType} from '../../WatchMyStatisticsPageTypes'
import ChooseChartTypeNextStageButton from './ChooseChartTypeNextStageButton';
import ChooseChartTypePreviousStageButton from './ChooseChartTypePreviousStageButton';


function ChooseChartType() {

    const {watchMyStatiscicsStore} = useContext(Context);


    const handleOnClick = (chartType: ChartRepresentationType) => {

        watchMyStatiscicsStore.setChartType(chartType);
    }

    return (
        <>
        <ul>
            {chartTypesArray.map((chartType) => {

                if(chartType === 'shotsAmountAndPercentageChart' && watchMyStatiscicsStore.getRepresentedUsersIds().length > 1) {

                    return null
                }
                
                return (
                    <LiButton 
                    handleClick={() => handleOnClick(chartType)}
                    isClicked={watchMyStatiscicsStore.isSelectedChartType(chartType)}>
                        {chartsNamesDict[chartType]}
                    </LiButton>

                )
            })}
        </ul>
        <ChooseChartTypeNextStageButton/>
        <ChooseChartTypePreviousStageButton/>
        </>
    )
    
}

export default observer(ChooseChartType)