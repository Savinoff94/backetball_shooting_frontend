import { useState } from 'react';
import {SignUpPasswordRulesList} from './helpers/inputCheckerInfosLists';
import {SignUpLoginRulesList} from './helpers/inputCheckerInfosLists';
import {EvaluetedRuleObject} from '../../types/loginGroupTypes';
import CheckedInputsForm from '../../components/CheckedInputsForm/CheckedInputsForm';

export default function SignUp() {

    const [login, setLogin] = useState <string> ('');
    const [isLoginRulesFollowed, setLoginRulesFollowed] = useState <boolean> (false);
    const [loginBackEndErrors, setLoginBackEndErrors] = useState <EvaluetedRuleObject[]> ([]);
    
    const [password, setPassword] = useState <string> ('');
    const [isPasswordRulesFollowed, setPasswordRulesFollowed] = useState <boolean> (false);
    const [passwordBackEndErrors, setPasswordBackEndErrors] = useState <EvaluetedRuleObject[]> ([]);

    const loginProps = {
        checkedInputBlockKey: 'crypto.randomUUID()2',
        describedRulesList : SignUpLoginRulesList,
        setInputValue : setLogin,
        inputValue : login,
        setIsRulesFollowed : setLoginRulesFollowed,
        inputId : 'userLoginInput',
        labelText : 'Login',
        backEndErrors : loginBackEndErrors,
        setBackEndErrors: setLoginBackEndErrors,
        isInputRulesFollowed : isLoginRulesFollowed,
    };
    
    const passwordProps = {
        checkedInputBlockKey: 'crypto.randomUUID()1',
        describedRulesList : SignUpPasswordRulesList,
        setInputValue : setPassword,
        inputValue : password,
        setIsRulesFollowed : setPasswordRulesFollowed,
        inputId : 'userPasswordInput',
        labelText : 'Password',
        backEndErrors : passwordBackEndErrors,
        setBackEndErrors: setPasswordBackEndErrors,
        isInputRulesFollowed : isPasswordRulesFollowed,
    };

    const cancelButtonClickHandler = (e : React.SyntheticEvent) => {

        e.preventDefault();
        e.stopPropagation();
        
        setLogin('');
        setPassword('');
        setLoginRulesFollowed(false);
        setPasswordRulesFollowed(false);
        setPasswordBackEndErrors([]);
        setLoginBackEndErrors([]);

    };

    
    
    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        setPasswordBackEndErrors([{textRule: 'backPassword', isError: true, key: 'backTest1'}]);
        setLoginBackEndErrors([{textRule: 'backLogin', isError: true, key: 'backTest2'}]);
    }
    
    const checkedInputsFormProps = {

        checkedInputsDataArr : [loginProps, passwordProps],
        formSubmitHandler : formSubmitHandler,
        cancelButtonClickHandler : cancelButtonClickHandler,
    };

    return (
        
        <CheckedInputsForm {...checkedInputsFormProps}/>
    );
}