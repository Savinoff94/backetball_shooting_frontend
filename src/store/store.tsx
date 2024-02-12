import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/response/IUser";
import AuthService from "../services/AuthService";

export default class Store {

    user = {} as IUser;

    isAuth = false; 

    isLoading = false;

    constructor() {

        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {

        this.isAuth = bool;
    }

    setUser(user: IUser) {

        this.user = user;
    }

    setIsLoading(bool: boolean) {

        this.isLoading = bool;
    }

    getUserId() : string {

        if(this.isAuth) {

            return this.user.id;
        }

        return '';
    }

    async login(email: string, password: string) {
        
        try {
            
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {

            if(axios.isAxiosError(error)) {

                if(axios.isAxiosError(error)) {

                console.log(error.response?.data?.message);
            
                } else {

                    console.error(error);
                }
            } else {

                console.error(error);
            }

        }
    }

    async registration(login:string, password: string,email: string) {
        
        try {
            
            const response = await AuthService.registration(login, password, email);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {

            if(axios.isAxiosError(error)) {

                console.log(error.response?.data?.message);
            
            } else {

                console.error(error);
            }
        }
    }

    async logout() {

        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (error) {

            if(axios.isAxiosError(error)) {

                console.log(error.response?.data?.message);
            
            } else {

                console.error(error);
            }
        }
    }

    async checkAuth() {

        this.setIsLoading(true);

        try {
            
            const response = await axios.get<AuthResponse>(API_URL + '/refresh', {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {

            this.setAuth(false);
            
            if(axios.isAxiosError(error)) {

                console.log(error.response?.data?.message);
            
            } else {

                console.error(error);
            }

        } finally {

            this.setIsLoading(false);
        }
    }

    getUser() {

        return structuredClone(this.user);
    }
}