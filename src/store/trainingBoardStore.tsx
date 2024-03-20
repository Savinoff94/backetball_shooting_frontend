import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import {getSessionStorageData, setSessionStorageData} from './helpers';
import {LocalTrainingData} from './types';
import ShootingTrainingService from "../services/ShootingTrainingService";
import SimpleStatsServise from "../services/SimpleStatsServise";


export default class TrainingBoardStore {

    private static instance: TrainingBoardStore | null = null;

    private currentShooter = '' as string;

    private currentSpot = '' as string;

    private currentTries = 0 as number

    private currentMakes = 0 as number

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): TrainingBoardStore {

        if (!TrainingBoardStore.instance) {

          TrainingBoardStore.instance = new TrainingBoardStore();
        }

        return TrainingBoardStore.instance;
    }

    getCurrentShooter = () => this.currentShooter; 
    setCurrentShooter = (id: string) => this.currentShooter = id;
    isCurrentShooter = (id: string) => this.currentShooter === id;
    isCurrentShooterSet = () => this.currentShooter === '';
    

    getCurrentSpot = () => this.currentSpot;
    setCurrentSpot = (id: string) => this.currentSpot = id;
    isCurrentSpot = (spotIndex: string) => this.currentSpot === spotIndex;
    isCurrentSpotSet = () => this.currentSpot === '';

    getCurrentTries = () => this.currentTries;
    getCurrentMakes = () => this.currentMakes;
    resetCurrentTries = () => runInAction(() => {this.currentTries = 0;}) 
    resetCurrentMakes = () => runInAction(() => {this.currentMakes = 0;}) 
    appendCurrentTries = () => runInAction(() => {++this.currentTries});
    appendCurrentMakes = () => runInAction(() => {++this.currentMakes});

    isShootingSetValid = () => {

        if(this.currentTries > 0 && this.currentTries > 0) {

            return true;
        }

        return false;
    }

    shotMade = () => {

        this.appendCurrentMakes();
        this.appendCurrentTries();
    }

    shotMissed = () => {

        this.appendCurrentTries();
    }

    saveCurrentShooterDataDb = async (currentShooter:string, currentSpot:string, currentTries:number, currentMakes:number) => {
        
        try {

            await ShootingTrainingService.saveShootingSet(currentShooter, currentSpot, currentTries, currentMakes);

            SimpleStatsServise.updateUsersSimpleStats(currentShooter, currentSpot)
            
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

    updateTrainingDataLocally = async () => {
        
        const currentTrainingData : LocalTrainingData = getSessionStorageData('currentTraining');

        if(!(this.currentShooter in currentTrainingData)) {
            
            currentTrainingData[this.currentShooter] = {}
        }

        if(!(this.currentSpot in currentTrainingData[this.currentShooter])) {
            
            currentTrainingData[this.currentShooter][this.currentSpot] = []
        }

        currentTrainingData[this.currentShooter][this.currentSpot].push({tries: this.currentTries, makes: this.currentMakes});

        setSessionStorageData('currentTraining', JSON.stringify(currentTrainingData));
    }
}