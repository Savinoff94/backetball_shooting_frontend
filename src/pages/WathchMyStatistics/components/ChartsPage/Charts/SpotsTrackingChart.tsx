import { Context } from '../../../../../index';
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { LineChartPointCoordinatesType, chartSpotKeyType, ShotsLineChartGroupedBySpotData} from '../../../WatchMyStatisticsPageTypes'
import ShotsLinearChart from './ShotsLinearChart'

function SpotsTrackingChart() {

    const {watchMyStatiscicsStore} = useContext(Context);

    const chartData = watchMyStatiscicsStore.getChartData() as ShotsLineChartGroupedBySpotData;

    let userId = '';
    let spotKeys: chartSpotKeyType[] = [];
    
    if(Object.keys(chartData).length > 0) {

        userId = Object.keys(chartData)[0]; 
        spotKeys = Object.keys(chartData[userId]);
    }
    

    const labelDataMap = spotKeys.reduce((accumulator, spotKey) => {

        const triesLabel = spotKey + ' tries amount'
        const makesLabel = spotKey + ' makes amount'

        accumulator.set(triesLabel, []);
        accumulator.set(makesLabel, []);
        
        const dates = Object.keys(chartData[userId][spotKey]);
        
        dates.forEach((date) => {

            const tries = chartData[userId][spotKey][date]['tries'];
            const makes = chartData[userId][spotKey][date]['makes'];

            accumulator.get(triesLabel)?.push({'x': parseInt(date), 'y': tries});
            accumulator.get(makesLabel)?.push({'x': parseInt(date), 'y': makes});

        })

        return accumulator;

    }, new Map<chartSpotKeyType, LineChartPointCoordinatesType[]>())

    const datasets = Array.from(labelDataMap).map(([spotLabel, spotData]) => {

        return {
            data: spotData,
            label: spotLabel
        }
    })

    
    return (
        <>
        <ShotsLinearChart {...{datasets}}/>
        </>
    )

}

export default observer(SpotsTrackingChart)