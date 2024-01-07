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
        />
    )

}

export default observer(TriesInput);