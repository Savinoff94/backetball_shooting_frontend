import { AxiosResponse } from "axios";
import $api from "../http";
import {UserIdLoginMapType, ShootingSetIdRecordResponseType} from '../store/types'

type ShootingSetsResponse = {
    sets: ShootingSetIdRecordResponseType,
    userIdLoginMap: UserIdLoginMapType
}

export default class ManageTrainingDataService {

    static async getCurrentUsersShootingSets(): Promise<AxiosResponse<ShootingSetsResponse>> {

        return $api.post('/getCurrentUserShootingSets');
    }

    static async removeSet(setId: string): Promise<AxiosResponse> {

        return $api.post('/removeSet', {setId});
    }
}