import { Context } from '../../../../../index';
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import {ShotsLineChartNotGroupedBySpotData, LineChartDataSetType, LineChartDataSets, LineChartValueKey} from '../../../WatchMyStatisticsPageTypes'
import ShotsLinearChart from './ShotsLinearChart'

function HumansComparisonChart({valueKey = 'tries'}:{valueKey: LineChartValueKey}) {

    const {watchMyStatiscicsStore, myTeamStoreInstance} = useContext(Context);

    const chartData = watchMyStatiscicsStore.getChartData() as ShotsLineChartNotGroupedBySpotData;
    const usersIds = Object.keys(chartData); 
    const myTeam = myTeamStoreInstance.getMyTeamUsers();
    
    const data = usersIds.reduce((accumulator: LineChartDataSets, userId: string) => {

        const dataSet = {
            data: [],
            label: myTeam[userId].login
        } as LineChartDataSetType;

        const dates = Object.keys(chartData[userId]);

        dates.forEach((date) => {

            const value = chartData[userId][date][valueKey];

            dataSet.data.push({'x': parseInt(date), 'y': value});
        })

        accumulator.datasets.push(dataSet);

        return accumulator
    }, {datasets: []}) 


    return (
        <>
        <ShotsLinearChart {...data}/>
        </>
    )

}

export default observer(HumansComparisonChart)