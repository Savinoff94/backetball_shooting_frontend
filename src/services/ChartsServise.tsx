import { AxiosResponse } from "axios";
import $api from "../http";
import {
        ChartRepresentedTimeType,
        ChartRepresentationType,
        chartSpotKeyType
    } from '../pages/WathchMyStatistics/WatchMyStatisticsPageTypes'

export default class ChartsServise {

    static async getChartsData(usersIds: string[], spotKey: chartSpotKeyType|null = null, timeKey: ChartRepresentedTimeType, chartType: ChartRepresentationType): Promise<AxiosResponse> {

        return $api.post('/getChartsData', {usersIds, spotKey, timeKey, chartType});
    }
}