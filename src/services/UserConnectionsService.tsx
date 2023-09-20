import { AxiosResponse } from "axios";
import $api from "../http";
import {BaseUserConnectionsInfoType, UserConnections, UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { IUser } from "../models/response/IUser";

export default class UserConnectionsService {

    static async setUserConnectionsInfo(userConnectionsInfo: BaseUserConnectionsInfoType): Promise<AxiosResponse> {

        return $api.post('/setUserConnectionsInfo', userConnectionsInfo);
    }
    
    static async getUserConnections(userId:string): Promise<AxiosResponse<UserConnections>> {

        return $api.post('/getUserConnections');
    }
    
}