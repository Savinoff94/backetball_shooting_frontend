import CheckedInput from '../CheckedInput/CheckedInput';
import {CheckedInputsFormType} from '../../types/loginGroupTypes';

export default function CheckedInputsForm({checkedInputsDataArr, formSubmitHandler, cancelButtonClickHandler} : CheckedInputsFormType ): JSX.Element {

    const inputsList = checkedInputsDataArr.map((inputProps) => {

        return <CheckedInput {...inputProps}/>
    
    });

    const isErrorsOnFrontEnd = checkedInputsDataArr.some((checkedInputData) => {

        return checkedInputData['isInputRulesFollowed'] === false;
    });

    const isErrorsOnBackEnd = checkedInputsDataArr.some((checkedInputData) => {

        return checkedInputData['backEndErrors'].length !== 0;
    });

    return (
        <form onSubmit={formSubmitHandler}>
            {inputsList}
            <button onClick={cancelButtonClickHandler}>Cancel</button>
            <button type='submit' disabled={isErrorsOnFrontEnd || isErrorsOnBackEnd}>Submit</button>
        </form>
    );
}