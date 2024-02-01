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
    shotsDispersionByCategory: 'shotsDispersionByCategory',
    shotsDispersionBySpot: 'shotsDispersionBySpot',
    shotsPersentageChart: 'shotsPersentageChart',
    shotsAmountChart: 'shotsAmountChart',
    shotsAmountAndPercentageChart: 'shotsAmountAndPercentageChart',
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
    shotsTypesArray
}