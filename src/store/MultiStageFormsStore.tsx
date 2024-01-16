import { makeAutoObservable } from "mobx";
import {TrainingStageType} from '../pages/TrainingPage/types/trainingPageTypes'
import {MyStatisticsPageStageType} from './types';


export default class MultiStageFormsStore {

    private static instance: MultiStageFormsStore | null = null;

    private trainingStage: TrainingStageType = 'chooseSquad';
    private chartStage: MyStatisticsPageStageType = 'selectUsersState';


    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): MultiStageFormsStore {

        if (!MultiStageFormsStore.instance) {

          MultiStageFormsStore.instance = new MultiStageFormsStore();
        }

        return MultiStageFormsStore.instance;
    }
    
    isCurrentTrainingStage = (stage: TrainingStageType) => this.getCurrentTrainingStage()
    setCurrentTrainingStage = (stage: TrainingStageType) => this.trainingStage = stage;
    getCurrentTrainingStage = () => this.trainingStage;

    submitTrainingStage = (condition: boolean, stage: TrainingStageType) => {
        
        if(condition) {

            this.setCurrentTrainingStage(stage);
        }
    }

    isCurrentChartStage = (stage: MyStatisticsPageStageType) => stage === this.getCurrentChartStage()
    setCurrentChartStage = (stage: MyStatisticsPageStageType) => this.chartStage = stage;
    getCurrentChartStage = () => this.chartStage;

    submitChartStage = (condition: boolean, stage: MyStatisticsPageStageType) => {
        
        if(condition) {

            this.setCurrentChartStage(stage);
        }
    }

}