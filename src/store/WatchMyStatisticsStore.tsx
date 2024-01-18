import { makeAutoObservable } from "mobx";
import {
        ChartRepresentedTimeType,
        ChartRepresentationType,
        chartSpotKeyType
       } from '../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'

import {MyStatisticsPageStageType} from '../store/types'

export default class WatchMyStatiscicsStore {

    private static instance: WatchMyStatiscicsStore | null = null;

    // private chartData

    private representedUsersIds = [] as string [];


    private spotKey : chartSpotKeyType = 'all';
    private timeKey : ChartRepresentedTimeType = 'all';
    private chartType : ChartRepresentationType = 'shotsPersentageChart';

    private currentMyStatisticsPageState : MyStatisticsPageStageType = "selectUsersState";

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
    isSelectedChartType = (chartType: ChartRepresentationType) => chartType === this.getChartType()
    isSelectedTimeType = (timeKey: ChartRepresentedTimeType) => timeKey === this.getTimeKey()
    getMyStatisticsPageState = () => this.currentMyStatisticsPageState;
    getRepresentedUsersIds = () => this.representedUsersIds;

    setSpotKey = (spotKey: chartSpotKeyType) => this.spotKey = spotKey;
    isSpotKey = (spotKey: chartSpotKeyType) => spotKey === this.spotKey;
    setTimeKey = (timeKey: ChartRepresentedTimeType) => this.timeKey = timeKey;
    setChartType = (chartType: ChartRepresentationType) => this.chartType = chartType;
    setMyStatisticsPageState = (pageState: MyStatisticsPageStageType) => this.currentMyStatisticsPageState = pageState;
    setRepresentedUsersIds = (usersIds: string[]) => this.representedUsersIds = usersIds;
}