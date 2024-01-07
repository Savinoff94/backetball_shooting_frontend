const getSessionStorageData = (key: string) => {
    
    const sessionData = sessionStorage.getItem(key);

    if (sessionData) {
        
        return JSON.parse(sessionData);
    }

    return {};
}

const setSessionStorageData = (key: string, dataStr: string) => {

    sessionStorage.setItem(key, dataStr);
}

export {

    getSessionStorageData,
    setSessionStorageData
}