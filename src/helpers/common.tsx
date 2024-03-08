import { ErrorInfo } from "../pages/SignUp/components/ErrorsListNew/types/ErrorsList_NewTypes";

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

function shouldDisplayErrorInInput(inputVal: string, frontendErrors: ErrorInfo[], serverErrors: string[]) : boolean {

    if(inputVal.length === 0) {
        
        return false;
    }

    const isFrontEndErrors = frontendErrors.find((item) => item.isError === true)

    if(isFrontEndErrors || serverErrors.length !== 0) {

        return true;
    }

    return false;
}

export {
    removeItemFromObjById,
    transferItemFromObjToObj,
    shouldDisplayErrorInInput,
}