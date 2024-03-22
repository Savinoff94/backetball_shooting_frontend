import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
        ChartRepresentedTimeType,
        ChartRepresentationType,
        chartSpotKeyType,
        ShotsDispersionChartDataType,
        ShotsLineChartNotGroupedBySpotData,
        ShotsLineChartGroupedBySpotData,
       } from '../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'


import ChartsServise from "../services/ChartsServise";
export default class WatchMyStatiscicsStore {

    private static instance: WatchMyStatiscicsStore | null = null;

    private chartData: ShotsDispersionChartDataType|ShotsLineChartNotGroupedBySpotData|ShotsLineChartGroupedBySpotData = {};

    private representedUsersIds = [] as string [];


    private spotKey : chartSpotKeyType = 'all';
    private timeKey : ChartRepresentedTimeType = 'all';
    private chartType : ChartRepresentationType = 'shotsPersentageChart';
    private isLoading = false;

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): WatchMyStatiscicsStore {

        if (!WatchMyStatiscicsStore.instance) {

          WatchMyStatiscicsStore.instance = new WatchMyStatiscicsStore();
        }

        return WatchMyStatiscicsStore.instance;
    }

    getSpotKey = () => this.spotKey;
    getTimeKey = () => this.timeKey;
    getChartType = () => this.chartType;
    isChartRepresentationDependsOnSpotType = (chartType: ChartRepresentationType) => {

        if(chartType === 'shotsDispersionByCategory' || chartType === 'shotsDispersionBySpot') {

            return false;
        }

        return true;
    }
    isSelectedChartType = (chartType: ChartRepresentationType) => chartType === this.getChartType()
    isSelectedTimeType = (timeKey: ChartRepresentedTimeType) => timeKey === this.getTimeKey()
    
    getRepresentedUsersIds = () => toJS(this.representedUsersIds);

    setSpotKey = (spotKey: chartSpotKeyType) => this.spotKey = spotKey;
    isSpotKey = (spotKey: chartSpotKeyType) => spotKey === this.spotKey;
    setTimeKey = (timeKey: ChartRepresentedTimeType) => this.timeKey = timeKey;
    setChartType = (chartType: ChartRepresentationType) => this.chartType = chartType;
    
    setRepresentedUsersIds = (usersIds: string[]) => this.representedUsersIds = usersIds;

    setIsLoading = (isLoading : boolean) => {runInAction(() => this.isLoading = isLoading)}
    getIsLoading = () => this.isLoading;

    fetchChartsData = async (usersIds: string[], spotKey: chartSpotKeyType, timeKey: ChartRepresentedTimeType, chartType: ChartRepresentationType) => {

        this.setIsLoading(true);

        try {
            
            const data = await ChartsServise.getChartsData(usersIds, spotKey, timeKey, chartType);
            this.chartData = data?.data?.chartData
            
        } catch (error) {

            console.log(error)

        } finally {

            this.setIsLoading(false)
        }

    }

    getChartData = () => {

        return toJS(this.chartData);
    }
}