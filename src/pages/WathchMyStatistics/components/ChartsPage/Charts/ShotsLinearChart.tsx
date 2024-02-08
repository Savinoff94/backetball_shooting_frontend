import { observer } from "mobx-react-lite";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors,
    TimeScale
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import {LineChartDataSets} from '../../../WatchMyStatisticsPageTypes'


function ShotsLinearChart(data: LineChartDataSets) {

    ChartJS.register(
        TimeScale,
        Colors,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    
    return (
        <>
        <Line data={data} options={{
            plugins: {
                colors: {
                forceOverride: true
                }
            },
            scales: {
                x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
                },
                
            }
        }}/>
        </>
    )

}

export default observer(ShotsLinearChart);