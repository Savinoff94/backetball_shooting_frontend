import { makeAutoObservable, runInAction } from "mobx";

export default class ModalControl {

    private isHidden = true;
    private onSubmitModalCallback: null | (() => void) = null
    private onCancelModalCallback: null | (() => void) = null

    constructor() {
        makeAutoObservable(this);
    }

    get isModalHidden() {

        return this.isHidden
    }

    runSubmitModalCallback = () => {

        if(this.onSubmitModalCallback) {

            this.onSubmitModalCallback()
        }
    }

    runCancelModalCallback = () => {

        if(this.onCancelModalCallback) {

            this.onCancelModalCallback()
        }
    }

    toggleModalVisibility = () => {

        runInAction(() => {

            this.isHidden = !this.isHidden
        })

    }

    setSubmitModalCallback = (callback: null | (() => void)) => {

        this.onSubmitModalCallback = callback;
    }

    setCancelModalCallback = (callback: null | (() => void)) => {

        this.onCancelModalCallback = callback;
    }
}