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

    loginServerErrors: string[] = []
    emailServerErrors: string[] = []
    passwordServerErrors: string[] = []
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

    setLoginServerErrors = (errors: string[]) => {this.loginServerErrors = errors}
    setEmailServerErrors = (errors: string[]) => {this.emailServerErrors = errors}
    setPasswordServerErrors = (errors: string[]) => {this.passwordServerErrors = errors}
    getLoginServerErrors = () => this.loginServerErrors;
    getEmailServerErrors = () => this.emailServerErrors;
    getPasswordServerErrors = () => this.passwordServerErrors;

    async login(email: string, password: string) {

        this.setIsLoading(true);
        
        try {
            
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {

            if(axios.isAxiosError(error)) {

                this.setErrors(error)

                console.log(error.response?.data?.message);
            
            } else {

                console.error(error);
            }

        } finally {

            this.setIsLoading(false);
        }
    }

    async registration(login:string, password: string,email: string) {

        this.setIsLoading(true);
        
        try {
            
            const response = await AuthService.registration(login, password, email);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {

            if(axios.isAxiosError(error)) {

                this.setErrors(error)

                console.log(error.response?.data?.message);
            
            } else {

                console.error(error);
            }
        } finally {

            this.setIsLoading(false);
        }
    }

    setErrors = (error:any) => {
        if(axios.isAxiosError(error)) {

            const loginError = error.response?.data?.errors?.[0].login;
            const emailError = error.response?.data?.errors?.[0].email;
            const passwordError = error.response?.data?.errors?.[0].password;

            if(loginError) {
                
                this.setLoginServerErrors([loginError])
            }

            if(emailError) {
                
                this.setEmailServerErrors([emailError])
            }
            
            if(passwordError) {
                
                this.setPasswordServerErrors([passwordError])
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