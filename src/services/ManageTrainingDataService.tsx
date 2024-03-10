import { AxiosResponse } from "axios";
import $api from "../http";
import {UserIdLoginMapType, ShootingSetIdRecordResponseType} from '../store/types'

type ShootingSetsResponse = {
    sets: ShootingSetIdRecordResponseType,
    userIdLoginMap: UserIdLoginMapType,
    pages: number
}

export default class ManageTrainingDataService {

    static async getCurrentUsersShootingSets(page: number): Promise<AxiosResponse<ShootingSetsResponse>> {

        return $api.post('/getCurrentUserShootingSets', {page});
    }

    static async removeSet(setId: string): Promise<AxiosResponse> {

        return $api.post('/removeSet', {setId});
    }
}