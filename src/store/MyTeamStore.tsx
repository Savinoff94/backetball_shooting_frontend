import {UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { makeAutoObservable, toJS } from "mobx";
import UserConnectionsService from "../services/UserConnectionsService";
import {MyTeamIdsListType} from './types'

export default class MyTeamStore {

    private static instance: MyTeamStore | null = null;
 
    private myTeamUsers = {} as UsersInfoById;

    private trainingSquadIds = [] as string [];
    private representInChartUsersIds = [] as string[];

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): MyTeamStore {

        if (!MyTeamStore.instance) {

          MyTeamStore.instance = new MyTeamStore();
        }

        return MyTeamStore.instance;
    }
    
    getUsersIdsListByKey = (key: MyTeamIdsListType = 'trainingSquadIds') => [...toJS(this[key])];

    addToUsersIdsList = (idToAdd : string, key: MyTeamIdsListType = 'trainingSquadIds') => {

        this[key] = [...this.getUsersIdsListByKey(key), idToAdd];
    }

    removeFromUsersIdsList = (idToRemove : string,  key: MyTeamIdsListType = 'trainingSquadIds') => {

        this[key] = [...this.getUsersIdsListByKey(key).filter(id => id !== idToRemove)]
    }

    isIdInUsersIdsList = (id:string, key: MyTeamIdsListType = 'trainingSquadIds') : boolean => {

        return this.getUsersIdsListByKey(key).includes(id)
    }

    isMyTeamUsersFetched = () => {

        return Object.keys(toJS(this.myTeamUsers)).length !== 0;
    }

    getMyTeamUsers = () => {

        return toJS(this.myTeamUsers)
    };

    fetchMyTeamUsers = async() => {

        if(this.isMyTeamUsersFetched()) {

            return;
        }
  
        try {

            const myTeamUsersRes = await UserConnectionsService.getMyTeamUsers();
            
            this.myTeamUsers = structuredClone(myTeamUsersRes.data);

        } catch (error) {
        
            console.log(error)
        } 
    }

    handleOnUserClick = (id: string, usersListType: MyTeamIdsListType) => {

        if(this.isIdInUsersIdsList(id, usersListType)) {

            this.removeFromUsersIdsList(id, usersListType);
        }
        else {

            this.addToUsersIdsList(id, usersListType);
        }
    }

}