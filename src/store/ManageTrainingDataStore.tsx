import { makeAutoObservable, toJS } from "mobx";
import {UserIdLoginMapType, ShootingSetRecord} from './types';
import manageTrainingDataService from '../services/ManageTrainingDataService';


export default class ManageTrainingDataStore {

    private static instance: ManageTrainingDataStore | null = null;

    private setsData = new Map <string, ShootingSetRecord>();

    private userIdLoginMap = {} as UserIdLoginMapType;

    private currentDataPage = 0;
    private pagesAmount = 1;

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): ManageTrainingDataStore {

        if (!ManageTrainingDataStore.instance) {

          ManageTrainingDataStore.instance = new ManageTrainingDataStore();
        }

        return ManageTrainingDataStore.instance;
    }

    get getCurrentDataPage() {return this.currentDataPage}
    get getPagesAmount(){ return this.pagesAmount}

    isNextPageAvilable = (currentPage: number) => {

        return (this.pagesAmount - 1) > currentPage;
    }

    isPreviousPageAvilable = (currentPage: number) => {

        return currentPage > 0
    }

    isChartsData = () => {

        return this.setsData.size !== 0;
    } 

    fetchUsersShootingSets = async (usersId: string, currentPage: number) => {

        try {

            if(!usersId) {

                throw new Error('User not authenticated')
            }

            const currentUsersShootingSetsResponse = await manageTrainingDataService.getCurrentUsersShootingSets(currentPage);

            const {sets, userIdLoginMap, pages} = currentUsersShootingSetsResponse.data;
            
            this.setsData = new Map(Object.entries(sets))
            this.userIdLoginMap = userIdLoginMap;
            this.pagesAmount = pages;
            
        } catch (error) {

            console.log(error)
        }
    }

    getSetsData() {

        return toJS(this.setsData);
    }

    getUserIdLoginMap() {

        return this.userIdLoginMap;
    }

    getUserLogin(userId: string, defaultLogin = 'unknown') {

        if(userId in this.userIdLoginMap) {

            return this.userIdLoginMap[userId]
        }

        return defaultLogin;
    }

    async removeSet(setId: string) {

        try {

            await manageTrainingDataService.removeSet(setId);

            this.setsData.delete(setId);
            
        } catch (error) {
            
            console.log(error)
        }
    }
}