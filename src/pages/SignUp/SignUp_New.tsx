import {useState} from 'react';
import {SignUpLoginRulesList, SignUpEmailRulesList, SignUpPasswordRulesList} from './helpers/inputCheckerInfosLists';
import ErrorsListNew from './components/ErrorsListNew/ErrorsListNew';
import {RuleInfo} from './components/ErrorsListNew/types/ErrorsList_NewTypes'


export default function SignUpPage() : JSX.Element {

    const [login,setLogin] = useState <string> ('')
    const [email, setEmail] = useState <string> ('')
    const [password,setPassword] = useState <string> ('')
    const [loginServerErrors,setLoginServerErrors] = useState <string[]> ([])
    const [emailServerErrors, setEmailServerErrors] = useState <string[]> ([])
    const [passwordServerErrors,setPasswordServerErrors] = useState <string[]> ([])

    const handleLoginChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setLogin(e.currentTarget.value);
        setLoginServerErrors([]);
    };
    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setPassword(e.currentTarget.value);
        setEmailServerErrors([]);
    };
    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        setEmail(e.currentTarget.value);
        setPasswordServerErrors([]);
    };
    

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        try {
            const response = await fetch("", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({login, email, password}),
            });
        
            const result = await response.json();

            console.log("Success:", result);

        } catch (error) {
            
        console.error("Error:", error);
        }
    }

    const handleReset = () => {

        setLogin('');
        setEmail('');
        setPassword('');
        setLoginServerErrors([]);
        setEmailServerErrors([]);
        setPasswordServerErrors([]);
    }

    let isDisabled = false;

    
    const loginErrorInfoList =  SignUpLoginRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(login);

        if(isError) {

            isDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    const emailErrorInfoList =  SignUpEmailRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(email);

        if(isError) {

            isDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    const passwordErrorInfoList =  SignUpPasswordRulesList.map((ruleInfo: RuleInfo) => {

        const isError =  ruleInfo.ruleCheckerFunction(password);

        if(isError) {

            isDisabled = true
        }

        return {text: ruleInfo['textRule'], key: ruleInfo['key'], isError:isError}
    })
    
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="login">First name: </label>
                <input onChange={handleLoginChange} type="text" name="login"  required/>
                <ErrorsListNew errorInfosList={loginErrorInfoList} serverErrors={loginServerErrors}/>
                <br/>
                <label htmlFor="email">email: </label>
                <input onChange={handleEmailChange} type="email" name="email"  required/>
                <ErrorsListNew errorInfosList={emailErrorInfoList} serverErrors={emailServerErrors}/>
                <br/>
                <label htmlFor="password">password: </label>
                <input onChange={handlePasswordChange} type="password" name="password"  required/>
                <ErrorsListNew errorInfosList={passwordErrorInfoList} serverErrors={passwordServerErrors}/>
                <br/>
                <button disabled={isDisabled} type="submit" value="Login"/>
                
                <button onClick={handleReset} type="reset" value="Reset"/>
            </form>
        </>
    );
}