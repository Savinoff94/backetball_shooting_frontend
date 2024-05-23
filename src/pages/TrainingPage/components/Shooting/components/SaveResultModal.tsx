import Modal from "../../../../../commonComponents/Modal/Modal";
import { useContext } from "react";
import { Context } from '../../../../../index';
import {observer} from 'mobx-react-lite';


function SaveResultModal() {

    const {trainingBoardStore} = useContext(Context);


    return (
        <Modal
        headerText="Save set"
        subText="Are you sure you dont want to save result?"
        isOpen={!trainingBoardStore.modalVisibilityController.isModalHidden}
        submitButtonText="Save and continue"
        declineButtonText="Continue without saving"
        onClose={() => trainingBoardStore.modalVisibilityController.toggleModalVisibility()}
        onSubmit={async() => {

            trainingBoardStore.modalVisibilityController.toggleModalVisibility()
            await trainingBoardStore.saveCurrentShooterDataDb();

            trainingBoardStore.modalVisibilityController.runSubmitModalCallback()


        }}
        onDecline={() => {

            trainingBoardStore.modalVisibilityController.toggleModalVisibility()
            trainingBoardStore.modalVisibilityController.runCancelModalCallback()

        }}
        />
    )
}

export default observer(SaveResultModal)
