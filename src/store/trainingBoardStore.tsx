import { makeAutoObservable, toJS } from "mobx";


export default class TrainingBoardStore {

    private static instance: TrainingBoardStore | null = null;

    private currentShooter = '' as string;

    private currentSpot = '' as string;

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


}