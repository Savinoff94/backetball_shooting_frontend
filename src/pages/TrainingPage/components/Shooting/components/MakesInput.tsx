import {observer} from 'mobx-react-lite';
import ControlledScoresInput from './ControlledScoresInput';
import { useContext } from "react";
import { Context } from '../../../../../index';

function MakesInput() {

    const {trainingBoardStore} = useContext(Context);

    return (
        <ControlledScoresInput
        text = {'Makes:'}
        inputControl ={() => trainingBoardStore.getCurrentMakes()}
        spanClasses="bg-green-800"
        inputClasses='border-green-800'
        />
    )

}

export default observer(MakesInput);