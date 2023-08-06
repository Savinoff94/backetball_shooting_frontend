type UserBasicInfo = {

    id: string
    login: string,
    email: string,
    imageSrc: string,
    
}

type UserBasicBasketballStats = {
    freethrows?: string ;
    threePointers?: string;
    twoPointers?: string;
}

type FriendActionButtonInfo = {
    action: (ids:string[]) => void,
    text: string,
    color: string,
}

export {
    type UserBasicInfo,
    type UserBasicBasketballStats,
    type FriendActionButtonInfo
}