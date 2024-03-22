import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import ShotsDispersionChart from './Charts/ShotsDispersionChart'
import HumansComparisonChart from "./Charts/HumansComparisonChart";
import SpotsTrackingChart from "./Charts/SpotsTrackingChart";
import ChartsPagePreviousStageButton from "./ChartsPagePreviousStageButton";
import ChartsPageToBeginningButton from "./ChartsPageToBeginningButton";
import FlexWrapper from "../../../../StyledComponents/FlexWrapper";
import LoadingBar from "../../../../StyledComponents/LoadingBar";

import {
    ChartRepresentationType,
   } from '../../WatchMyStatisticsPageTypes'

function ChartsPage() {

    const {watchMyStatiscicsStore} = useContext(Context);

    useEffect(() => {

        watchMyStatiscicsStore.fetchChartsData(watchMyStatiscicsStore.getRepresentedUsersIds(), watchMyStatiscicsStore.getSpotKey(), watchMyStatiscicsStore.getTimeKey(), watchMyStatiscicsStore.getChartType())
        
    }, [])

    function getChart(chartType:ChartRepresentationType) {
        switch (chartType) {
            case 'shotsDispersionByCategory':
                return <ShotsDispersionChart/>
                
            case 'shotsDispersionBySpot':
                return <ShotsDispersionChart/>
                
            case 'shotsPersentageChart':
                return <HumansComparisonChart valueKey={'percent'}/>
                
            case 'shotsAmountChart':
                return <HumansComparisonChart valueKey={'tries'}/>
                
            case 'shotsAmountAndPercentageChart':
                return <SpotsTrackingChart/>
                
            default:
                return <div>Wrong chart type: {watchMyStatiscicsStore.getChartType()}</div>
        }
    }

    return (
    <>
    {getChart(watchMyStatiscicsStore.getChartType())}
    <FlexWrapper isColumn={true}>
        <ChartsPagePreviousStageButton/>
        <ChartsPageToBeginningButton/>
    </FlexWrapper>
    
    {watchMyStatiscicsStore.getIsLoading() ? <LoadingBar/> : null}
    </>
    )

}

export default observer(ChartsPage)