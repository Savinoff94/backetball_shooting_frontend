import { AxiosResponse } from "axios";
import $api from "../http";
import {BaseUserConnectionsInfoType, UserConnections, UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { IUser } from "../models/response/IUser";

export default class UserConnectionsService {
    
    static async getUserConnections(): Promise<AxiosResponse<UserConnections>> {

        return $api.post('/getUserConnections');
    }

    static async friendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/friendRequest', {ids});
    }
    static async cancelFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/cancelFriendRequest', {ids});
    }
    static async approveFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/approveFriendRequest', {ids});
    }
    static async disapproveFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/disapproveFriendRequest', {ids});
    }
    static async removeFriendRequest(ids: string[]): Promise<AxiosResponse> {

        return $api.post('/removeFriendRequest', {ids});
    }
    
}