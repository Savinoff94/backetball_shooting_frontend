import {useState, useContext} from 'react';
import {SignUpLoginRulesList, SignUpEmailRulesList, SignUpPasswordRulesList} from './helpers/inputCheckerInfosLists';
import ErrorsListNew from './components/ErrorsListNew/ErrorsListNew';
import {RuleInfo} from './components/ErrorsListNew/types/ErrorsList_NewTypes';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';


function SignUpPage() : JSX.Element {

    const navigate = useNavigate();

    const {store} = useContext(Context)

    const [login,setLogin] = useState <string> ('')
    const [email, setEmail] = useState <string> ('')
    const [password,setPassword] = useState <string> ('')
    const [passwordServerErrors,setPasswordServerErrors] = useState <string[]> ([])

    const handleLoginChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setLogin(e.currentTarget.value);
        store.setLoginServerErrors([]);
    };
    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setPassword(e.currentTarget.value);
        setPasswordServerErrors([]);
    };
    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setEmail(e.currentTarget.value);
        store.setEmailServerErrors([]);
    };
    

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        await store.registration(login, password, email);
        
        if(store.isAuth) {
            navigate('/mainMenu');
        }
        else {
            console.log('sign up handleFormSubmit error no auth');
        }
    }

    const handleReset = () => {

        setLogin('');
        setEmail('');
        setPassword('');
        store.setLoginServerErrors([]);
        store.setEmailServerErrors([]);
        setPasswordServerErrors([]);
    }

    let isSubmitFormDisabled = false;

    
    const loginErrorInfoList =  SignUpLoginRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(login);

        if(isError) {

            isSubmitFormDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    const emailErrorInfoList =  SignUpEmailRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(email);

        if(isError) {

            isSubmitFormDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    const passwordErrorInfoList =  SignUpPasswordRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(password);

        if(isError) {

            isSubmitFormDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    // added value to input, should check
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="login">First name: </label>
                <input value={login} onChange={handleLoginChange} type="text" name="login"  required/>
                <ErrorsListNew errorInfosList={loginErrorInfoList} serverErrors={store.loginServerErrors}/>
                <br/>
                <label htmlFor="email">email: </label>
                <input value={email} onChange={handleEmailChange} type="email" name="email"  required/>
                <ErrorsListNew errorInfosList={emailErrorInfoList} serverErrors={store.emailServerErrors}/>
                <br/>
                <label htmlFor="password">password: </label>
                <input value={password} onChange={handlePasswordChange} type="password" name="password"  required/>
                <ErrorsListNew errorInfosList={passwordErrorInfoList} serverErrors={passwordServerErrors}/>
                <br/>
                <button disabled={isSubmitFormDisabled} type="submit" value="Login"/>
                
                <button onClick={handleReset} type="reset" value="Reset"/>
            </form>
        </>
    );
}

// export default SignUpPage;
export default observer(SignUpPage);