import { AxiosResponse } from "axios";
import $api from "../http";

export default class SimpleStatsServise {

    static async updateUsersSimpleStats(shooterId:string, spotKey: string): Promise<AxiosResponse> {

        return $api.post('/updateUsersSimpleStats', {shooterId, spotKey});
    } 
}