const chartRepresentedTimesArray = ['all', 'year', 'sixMonths', 'threeMonths', 'lastMonth'] as const;

const chartRepresentedTimesNamesDict = {
    all: 'all',
    year: 'year',
    sixMonths: 'sixMonths',
    threeMonths: 'threeMonths',
    lastMonth: 'lastMonth',
}

type ChartRepresentedTimeType = typeof chartRepresentedTimesArray[number];


const chartTypesArray = ['shotsDispersionByCategory', 'shotsDispersionBySpot', 'shotsPersentageChart', 'shotsAmountChart', 'shotsAmountAndPercentageChart'] as const
const chartsNamesDict = {
    shotsDispersionByCategory: 'Shots dispersion by category',
    shotsDispersionBySpot: 'Shots dispersion by spot',
    shotsPersentageChart: 'Shots persentage chart',
    shotsAmountChart: 'Shots amount chart',
    shotsAmountAndPercentageChart: 'Shots amount and percentage chart',
}

type ChartRepresentationType = typeof chartTypesArray[number];

// type ChartRepresentationType = 'shotsDispersionByCategory' |
//                                'shotsDispersionBySpot' |
//                                'shotsPersentageChart' |
//                                'shotsAmountChart'

const shotsTypesArray = ['all', 'threes', 'freethrows', 'midRange', 'shortMidRange', 'shortRange']

type spotCategoryKeyType = typeof shotsTypesArray[number];
type shortRangeSpotKeyType = 'sh1'|'sh2'|'sh3'|'sh4'  
type freethrowSpotKeyType = 'fr1'
type threeSpotKeyType = 'th1'|'th2'|'th3'|'th4'|'th4'|'th5'|'th6'|'th7'
type midRangeSpotKeyType = 'mi1'|'mi2'|'mi3'|'mi4'|'mi5'|'mi6'|'mi7'|'mi8'|'mi9'    
type shortMidRangeKeyType = 'shm1'|'shm2'|'shm3'|'shm4'

type chartSpotKeyType = spotCategoryKeyType | shortRangeSpotKeyType | freethrowSpotKeyType | threeSpotKeyType | midRangeSpotKeyType| shortMidRangeKeyType;


type ShotsDispersionChartDataType = {
    [userId: string] : {
        [spotKey: chartSpotKeyType] : number
    }
}

type ShotsLineChartNotGroupedBySpotData = {
    [userId: string] : {
        [date: string] : {
            tries: number
            makes: number
            percent: number
        }
    }
}

type ShotsLineChartGroupedBySpotData = {
    [userId: string] : {
        [spotKey: chartSpotKeyType]: {
            [date: string] : ShotsDescripshonType
        }
    }
}

type ShotsDescripshonType = {
    tries: number
    makes: number
    percent: number
}

type LineChartDataSetType = {
    data: LineChartPointCoordinatesType[],
    label: string
}

type LineChartPointCoordinatesType = {
    x: number,
    y: number
}

type LineChartDataSets = {
    datasets: LineChartDataSetType[]
}


const linearChartValuesKeys = ['tries','percent','makes'] as const;
type LineChartValueKey = typeof linearChartValuesKeys[number];


export {
    type ChartRepresentedTimeType,
    type ChartRepresentationType,
    type spotCategoryKeyType,
    type shortRangeSpotKeyType,
    type freethrowSpotKeyType,
    type threeSpotKeyType,
    type midRangeSpotKeyType,
    type chartSpotKeyType,
    chartTypesArray,
    chartsNamesDict,
    chartRepresentedTimesArray,
    chartRepresentedTimesNamesDict,
    shotsTypesArray,
    type ShotsDispersionChartDataType,
    type ShotsLineChartNotGroupedBySpotData,
    type ShotsLineChartGroupedBySpotData,
    type LineChartDataSetType,
    type LineChartDataSets,
    type LineChartValueKey,
    type LineChartPointCoordinatesType,
    type ShotsDescripshonType,
}