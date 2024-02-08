import { useContext, useEffect } from "react";
import { Context } from '../../../../index';
import {observer} from 'mobx-react-lite';
import ShotsDispersionChart from './Charts/ShotsDispersionChart'
import HumansComparisonChart from "./Charts/HumansComparisonChart";
import SpotsTrackingChart from "./Charts/SpotsTrackingChart";

function ChartsPage() {

    const {watchMyStatiscicsStore} = useContext(Context);

    useEffect(() => {

        watchMyStatiscicsStore.fetchChartsData(watchMyStatiscicsStore.getRepresentedUsersIds(), watchMyStatiscicsStore.getSpotKey(), watchMyStatiscicsStore.getTimeKey(), watchMyStatiscicsStore.getChartType())
        
    }, [])
    
    switch (watchMyStatiscicsStore.getChartType()) {
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

export default observer(ChartsPage)