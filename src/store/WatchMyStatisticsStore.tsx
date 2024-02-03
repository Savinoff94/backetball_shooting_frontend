import { makeAutoObservable, toJS } from "mobx";
import {
        ChartRepresentedTimeType,
        ChartRepresentationType,
        chartSpotKeyType
       } from '../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'


import ChartsServise from "../services/ChartsServise";
export default class WatchMyStatiscicsStore {

    private static instance: WatchMyStatiscicsStore | null = null;

    private chartData: any = {};

    private representedUsersIds = [] as string [];


    private spotKey : chartSpotKeyType = 'all';
    private timeKey : ChartRepresentedTimeType = 'all';
    private chartType : ChartRepresentationType = 'shotsPersentageChart';

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

    fetchChartsData = async (usersIds: string[], spotKey: chartSpotKeyType, timeKey: ChartRepresentedTimeType, chartType: ChartRepresentationType) => {

        try {
            
            const data = await ChartsServise.getChartsData(usersIds, spotKey, timeKey, chartType);
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
}