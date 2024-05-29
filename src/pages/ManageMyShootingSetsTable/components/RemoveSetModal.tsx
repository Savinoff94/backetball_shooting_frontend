import Modal from "../../../commonComponents/Modal/Modal";
import { useContext } from "react";
import { Context } from '../../../index';
import {observer} from 'mobx-react-lite';


function RemoveSetModal() {

    const {manageTrainingDataStore} = useContext(Context);

    return (
        
        <Modal
        headerText="Remove training set"
        subText="Are you sure you want to remove this set?"
        isOpen={!manageTrainingDataStore.modalVisibilityController.isModalHidden}
        submitButtonText="Yes"
        declineButtonText="No"
        onClose={() => manageTrainingDataStore.modalVisibilityController.toggleModalVisibility()}
        onSubmit={async() => {

            manageTrainingDataStore.modalVisibilityController.runSubmitModalCallback()

        }}
        onDecline={() => {

            manageTrainingDataStore.modalVisibilityController.runCancelModalCallback()

        }}
        />
    )
}

export default observer(RemoveSetModal)
