import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/response/IUser";
import {UsersInfoById} from '../pages/Friends/types/friendsTypes';


export default class UserService {

    // static fetchUsers(): Promise<AxiosResponse<IUser[]>> {

    //     return $api.get<IUser[]>('/users');
    // }

    static async searchUsers(login: string, exact: boolean = false): Promise<AxiosResponse<UsersInfoById>> {

        return $api.post('/searchUsers', {login, exact});
    }


}