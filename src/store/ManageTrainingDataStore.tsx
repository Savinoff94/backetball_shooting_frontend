import { makeAutoObservable } from "mobx";
import {UserIdLoginMapType, ShootingSetRecord} from './types';
import manageTrainingDataService from '../services/ManageTrainingDataService';


export default class ManageTrainingDataStore {

    private static instance: ManageTrainingDataStore | null = null;

    private setsData = new Map <string, ShootingSetRecord>();

    private userIdLoginMap = {} as UserIdLoginMapType;


    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): ManageTrainingDataStore {

        if (!ManageTrainingDataStore.instance) {

          ManageTrainingDataStore.instance = new ManageTrainingDataStore();
        }

        return ManageTrainingDataStore.instance;
    }

    isChartsData = () => {

        return this.setsData.size !== 0;
    } 

    fetchUsersShootingSets = async (usersId: string) => {

        try {

            if(!usersId) {

                throw new Error('User not authenticated')
            }

            const currentUsersShootingSetsResponse = await manageTrainingDataService.getCurrentUsersShootingSets();

            const {sets, userIdLoginMap} = currentUsersShootingSetsResponse.data;

            this.setsData = new Map(Object.entries(sets))
            this.userIdLoginMap = userIdLoginMap;
            
        } catch (error) {

            console.log(error)
        }
    }

    getSetsData() {

        return this.setsData;
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