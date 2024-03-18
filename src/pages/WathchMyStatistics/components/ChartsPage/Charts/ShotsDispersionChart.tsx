import { useContext, useState } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';
import {ShotsDispersionChartDataType} from '../../../WatchMyStatisticsPageTypes'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function ShotsDispersionChart() {

    const {watchMyStatiscicsStore, myTeamStoreInstance} = useContext(Context);
    const [displayedUserIndex, setDisplayedUserIndex] = useState<number>(0)

    
    ChartJS.register(Colors);
    ChartJS.register(ArcElement, Tooltip, Legend);


    const chartData = watchMyStatiscicsStore.getChartData() as ShotsDispersionChartDataType;
    const userIds = Object.keys(chartData);
    const displayedUserId = userIds[displayedUserIndex];

    let labels: string[] = []
    let shotsAmountData: number[] = []

    if(chartData[displayedUserId]) {
        const myData = Object.entries(chartData[displayedUserId]).reduce((accumulator: { labels: string[]; shotsAmountData: number[] }, currentValue) => {

            accumulator['labels'].push(currentValue[0])
            accumulator['shotsAmountData'].push(currentValue[1])
            
            return accumulator;
        }, {labels:[], shotsAmountData: []});

        labels = myData['labels']
        shotsAmountData = myData['shotsAmountData']
    }

    

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Amount of shots',
            data: shotsAmountData,
            borderWidth: 1,
          },
        ],
      };

      const myTeam = myTeamStoreInstance.getMyTeamUsers();


    return(
    <>
    <Doughnut data={data} options={{
        plugins: {
            colors: {
            forceOverride: true
            }
        },
        responsive:true

    }}/>
    <div>
        {userIds.map((userId,index) => {
            return (
                <button onClick={() => setDisplayedUserIndex(index)}>{myTeam[userId].login}</button>
            )
        })}
    </div>
    </>
    )
}

export default observer(ShotsDispersionChart)