
const removeItemFromObjById = (ids:string[], obj:any) => {

    const objCopy = structuredClone(obj);

    ids.forEach((id) => {

      delete objCopy[id];
    });

    return objCopy;
}

const transferItemFromObjToObj = (ids:string[], donorObj: any, receiverObj: any) => {

    const receiverObjCopy = structuredClone(receiverObj);

    ids.forEach((id) => {

        if(!(id in donorObj)) {

            return;
        }

        receiverObjCopy[id] = structuredClone(donorObj[id]);
    });

    return receiverObjCopy;
}

export {
    removeItemFromObjById,
    transferItemFromObjToObj,
}