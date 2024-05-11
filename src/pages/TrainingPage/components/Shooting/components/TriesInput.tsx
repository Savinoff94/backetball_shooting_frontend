import {observer} from 'mobx-react-lite';
import ControlledScoresInput from './ControlledScoresInput';
import { useContext } from "react";
import { Context } from '../../../../../index';

function TriesInput() {

    const {trainingBoardStore} = useContext(Context);

    return (
        <ControlledScoresInput
        text = {'Tries:'}
        inputControl ={() => trainingBoardStore.getCurrentTries()}
        spanClasses="bg-red-500"
        inputClasses='border-red-500'
        />
    )

}

export default observer(TriesInput);