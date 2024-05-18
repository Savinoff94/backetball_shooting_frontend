import { makeAutoObservable, toJS } from "mobx";
import {UsersInfoById} from '../pages/Friends/types/friendsTypes'
import {removeItemFromObjById, transferItemFromObjToObj} from '../helpers/common';
import {filterByLogin} from '../pages/Friends/helpers/userFrontEndFilters';
import UserService from "../services/UserService";
import UserConnectionsService from "../services/UserConnectionsService";
import { AxiosResponse } from "axios";



export default class UserConnectionsStore {

    private static instance: UserConnectionsStore | null = null;

    constructor() {

        makeAutoObservable(this)
    }

    static getInstance(): UserConnectionsStore {

        if (!UserConnectionsStore.instance) {

          UserConnectionsStore.instance = new UserConnectionsStore();
        }

        return UserConnectionsStore.instance;
    }

    searchList = {} as UsersInfoById;
    friends = {} as UsersInfoById;
    pendingOtherUsersFriendRequests = {} as UsersInfoById;
    pendingThisUserFriendRequests = {} as UsersInfoById;
    isLoading = false;
    searchStr: string = ''; 
    
    setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;
    getIsLoading = () => this.isLoading

    setSearchList = (searchList: UsersInfoById) => {

        this.searchList = structuredClone(searchList)
    }
    getSearchList = (): UsersInfoById => {

        return toJS(this.searchList)
    }
    
    setFriends = (friends: UsersInfoById) => {

        this.friends = structuredClone(friends)
    }
    getFriends = (): UsersInfoById => toJS(this.friends);
    
    setPendingOtherUsersFriendRequests = (pendingOtherUsersFriendRequests: UsersInfoById) => {

        this.pendingOtherUsersFriendRequests = structuredClone(pendingOtherUsersFriendRequests)
    }
    getPendingOtherUsersFriendRequests = () : UsersInfoById => toJS(this.pendingOtherUsersFriendRequests)
    
    setPendingThisUserFriendRequests = (pendingThisUserFriendRequests: UsersInfoById) => {

        this.pendingThisUserFriendRequests = structuredClone(pendingThisUserFriendRequests)
    }
    getPendingThisUserFriendRequests = () : UsersInfoById =>  toJS(this.pendingThisUserFriendRequests)

    async onThisUserFriendRequest(idsArray : string[]) {

        this.setIsLoading(true);

        try {
    
            await UserConnectionsService.friendRequest(idsArray);

            const pendingThisUserFriendRequestsCopy = transferItemFromObjToObj(idsArray, this.getSearchList(), this.getPendingThisUserFriendRequests());
            this.setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);

            const searchCopy = removeItemFromObjById(idsArray, this.getSearchList());
            this.setSearchList(searchCopy);
          
        } catch (error) {
          
            console.log(error)
        } finally {

            this.setIsLoading(false);
        }
    }

    async onThisUserCancelFriendRequest(idsArray : string[]) {

        try {
            
            this.setIsLoading(true);
    
            await UserConnectionsService.cancelFriendRequest(idsArray);

            const pendingThisUserFriendRequestsCopy = removeItemFromObjById(idsArray, this.getPendingThisUserFriendRequests());
            this.setPendingThisUserFriendRequests(pendingThisUserFriendRequestsCopy);
          
        } catch (error) {
          
            console.log(error)

        } finally {

            this.setIsLoading(false);
        }
    }

    async onThisUserApproveFriendRequest(idsArray : string[]) {
    
        try {

            this.setIsLoading(true);
    
            await UserConnectionsService.approveFriendRequest(idsArray);

            const friendsCopy = transferItemFromObjToObj(idsArray, this.getPendingOtherUsersFriendRequests(), this.getFriends());
            this.setFriends(friendsCopy);

            const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(idsArray, this.getPendingOtherUsersFriendRequests());
            this.setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);
          
        } catch (error) {
          
            console.log(error)

        } finally {

            this.setIsLoading(false);
        }
    }

    async onThisUserDisapproveFriendRequest(idsArray : string[]) {

        try {

            this.setIsLoading(true);
    
            await UserConnectionsService.disapproveFriendRequest(idsArray);

            const pendingOtherUsersFriendRequestsCopy = removeItemFromObjById(idsArray, this.getPendingOtherUsersFriendRequests());
            this.setPendingOtherUsersFriendRequests(pendingOtherUsersFriendRequestsCopy);
    
        } catch (error) {
          
            console.log(error)

        } finally {

            this.setIsLoading(false);
        }
    }

    async onThisUserRemoveFriendRequest(idsArray : string[]) {

        try {

            this.setIsLoading(true);
    
            await UserConnectionsService.removeFriendRequest(idsArray);

            const friendsCopy = removeItemFromObjById(idsArray, this.getFriends());
            
            this.setFriends(friendsCopy);
          
        } catch (error) {
          
            console.log(error)

        } finally {

            this.setIsLoading(false);
        }
    }

    async fetchUserConncections() {

        try {

            this.setIsLoading(true);
  
            const userConnectionsRes = await UserConnectionsService.getUserConnections();

            const userConnections = userConnectionsRes.data;

            this.setFriends(userConnections['friends']);

            this.setPendingThisUserFriendRequests(userConnections['pendingThisUsersFriendRequests']);
        
            this.setPendingOtherUsersFriendRequests(userConnections['pendingOtherUsersFriendRequests']);
  
        } catch (error) {
    
            console.log(error)
            
        } finally {

            this.setIsLoading(false);

        }
    }

    getSearchStr = () => this.searchStr;
    setSearchStr = (newSearchString:string) => this.searchStr = newSearchString

    onSearch = async (userInput: string, signal: AbortSignal | null = null) => {

        userInput = userInput.toLowerCase();

        if(userInput.length === 1 || userInput.length === 0) {

            this.setSearchList({})

            return
        }
    
        if(userInput.length !== 1 && ((userInput.length % 3) !== 0)) {
    
            const filteredSearch = filterByLogin(this.getSearchList(), userInput);

            this.setSearchList(filteredSearch);
            
            return;
        }
    
        try {
    
            const usersResponse : AxiosResponse<UsersInfoById> = await UserService.searchUsers(userInput, false, signal);

            const users : UsersInfoById = usersResponse.data;

            const displayedUsers = [...Object.keys(this.getFriends()), ...Object.keys(this.getPendingOtherUsersFriendRequests()), ...Object.keys(this.getPendingThisUserFriendRequests())];

            displayedUsers.forEach((id) => {

                delete users[id];
            });

            this.setSearchList(structuredClone(users));
          
        } catch (error) {
          
            console.log(error)
        }
    }
}