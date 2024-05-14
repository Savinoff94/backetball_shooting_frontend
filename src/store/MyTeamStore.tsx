import {UsersInfoById} from '../pages/Friends/types/friendsTypes';
import { makeAutoObservable, toJS, runInAction } from "mobx";
import UserConnectionsService from "../services/UserConnectionsService";
import {MyTeamIdsListType} from './types'

export default class MyTeamStore {

    private static instance: MyTeamStore | null = null;
 
    private myTeamUsers = {} as UsersInfoById;

    private trainingSquadIds = [] as string [];
    private representInChartUsersIds = [] as string[];
    private isLoading = false;

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): MyTeamStore {

        if (!MyTeamStore.instance) {

          MyTeamStore.instance = new MyTeamStore();
        }

        return MyTeamStore.instance;
    }

    hasNoFriends = () => Object.keys(this.myTeamUsers).length === 1

    getOnlyUserIdInTeam = () => {

        if(this.hasNoFriends()) {

            return Object.keys(this.myTeamUsers)[0]
        }

        throw new Error('wrong amount in myTeamUsers');
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

    getIsLoading = () => { return this.isLoading}

    fetchMyTeamUsers = async() => {

        if(this.isMyTeamUsersFetched()) {

            return;
        }

        runInAction(() =>{this.isLoading = true;})
  
        try {

            const myTeamUsersRes = await UserConnectionsService.getMyTeamUsers();

            runInAction(() => {

                this.myTeamUsers = structuredClone(myTeamUsersRes.data);
            })
            

        } catch (error) {
        
            console.log(error)

        } finally {

            runInAction(() =>{this.isLoading = false;})
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