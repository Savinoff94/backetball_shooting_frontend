import ErrorsList from "../ErrorsList/ErrorsList";
import {CheckedInputProps, RuleObject} from '../../types/loginGroupTypes';



export default function CheckedInput({describedRulesList, setInputValue, inputValue, setIsRulesFollowed, inputId, labelText, backEndErrors, checkedInputBlockKey, setBackEndErrors} :CheckedInputProps): JSX.Element {

    const errorsList = [...backEndErrors];    

    describedRulesList.forEach(({textRule, ruleCheckerFunction, key}: RuleObject): void => {

        const isError = ruleCheckerFunction(inputValue);

        errorsList.push({isError: isError, textRule: textRule, key: key});
    });

    const isErrors = errorsList.some((data: {isError: boolean, textRule: string})=> data['isError'] === true);

    setIsRulesFollowed(!isErrors);

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {

        setBackEndErrors([]);
        
        setInputValue(e.currentTarget.value);
    };

    return (

        <div key={checkedInputBlockKey} className="checkedInputBlock">
            <label htmlFor={inputId}>{labelText}</label>
            <input id={inputId} onChange={onChange}></input>
            <ErrorsList textRulesList={errorsList}/>
        </div>
    )
}