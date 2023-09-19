import {UsersInfoById} from '../types/friendsTypes'

function filterByLogin(users: UsersInfoById, searchStr: string) : UsersInfoById {

    searchStr = searchStr.toLowerCase();

    const usersIds = Object.keys(users);

    const result : UsersInfoById = {};

    usersIds.forEach((userId: string) => {

        const login = users[userId]['login'].toLowerCase();

        if(!login.includes(searchStr)) {

            return;
        }

        result[userId] = structuredClone(users[userId]);
    });

    return result;
}

export {
    filterByLogin,
}