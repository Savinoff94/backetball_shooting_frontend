import { makeAutoObservable, toJS } from "mobx";
import {TrainingStageType} from '../pages/TrainingPage/types/trainingPageTypes'


export default class TrainingStagesStore {

    private static instance: TrainingStagesStore | null = null;

    private currentStage = 'chooseSquad' as TrainingStageType;

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): TrainingStagesStore {

        if (!TrainingStagesStore.instance) {

          TrainingStagesStore.instance = new TrainingStagesStore();
        }

        return TrainingStagesStore.instance;
    }

    setCurrentStage = (stage: TrainingStageType) => this.currentStage = stage;
    getCurrentStage = () => this.currentStage;

    submitStage = (condition: boolean, stage: TrainingStageType) => {
        
        if(condition) {

            this.setCurrentStage(stage);
        }
    }

}