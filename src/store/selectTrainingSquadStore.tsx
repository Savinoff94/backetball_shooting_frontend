import {UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { makeAutoObservable, toJS } from "mobx";
import UserConnectionsService from "../services/UserConnectionsService";



export default class SelectTrainingSquadStore {

    private static instance: SelectTrainingSquadStore | null = null;
 
    private possibleTrainingSquadUsers = {} as UsersInfoById;

    private trainingSquadIds = [] as string [];

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): SelectTrainingSquadStore {

        if (!SelectTrainingSquadStore.instance) {

          SelectTrainingSquadStore.instance = new SelectTrainingSquadStore();
        }

        return SelectTrainingSquadStore.instance;
    }

    addToTrainingSquadIds = (idToAdd : string) => {

        this.trainingSquadIds = [...this.getTrainingSquadIds(), idToAdd];
    }

    removeFromTrainingSquadIds = (idToRemove : string) => {

        this.trainingSquadIds = [...this.getTrainingSquadIds().filter(id => id !== idToRemove)]
    }

    isIdInTrainingSquadIds = (id:string) : boolean => {

        return this.getTrainingSquadIds().includes(id)
    }

    isPossibleTrainingSquadUsersFetched = () => {

        return Object.keys(toJS(this.possibleTrainingSquadUsers)).length !== 0;
    }

    getTrainingSquadIds = () => [...toJS(this.trainingSquadIds)];

    getPossibleTrainingSquadUsers = () => {

        return toJS(this.possibleTrainingSquadUsers)
    };

    fetchPossibleTrainingSquadUsers = async() => {

        if(this.isPossibleTrainingSquadUsersFetched()) {

            return;
        }
  
        try {

            const possibleTrainingSquadUsersRes = await UserConnectionsService.getPossibleTrainingSquadUsers();
            
            this.possibleTrainingSquadUsers = structuredClone(possibleTrainingSquadUsersRes.data);

        } catch (error) {
        
            console.log(error)
        } 
    }

}