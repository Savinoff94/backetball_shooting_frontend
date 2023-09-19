import { AxiosResponse } from "axios";
import $api from "../http";
import {BaseUserConnectionsObjType, UserConnections, UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { IUser } from "../models/response/IUser";

export default class UserConnectionsService {

    // static fetchUsers(): Promise<AxiosResponse<IUser[]>> {

    //     return $api.get<IUser[]>('/users');
    // }

    static async setUserConnections(userConnections: BaseUserConnectionsObjType): Promise<AxiosResponse> {

        return $api.post('/setUserConnections', userConnections);
    }
    
    static async getUserConnections(): Promise<AxiosResponse<UserConnections>> {

        return $api.post('/getUserConnections');
    }
    
    // static async getUsers(login: string, exact: boolean = false): Promise<AxiosResponse<UsersInfoById>> {

    //     return $api.post('/getUsers', {login, exact});
    // }

}