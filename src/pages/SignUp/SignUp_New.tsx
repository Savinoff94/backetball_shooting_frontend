import {useState, useContext} from 'react';
import {SignUpLoginRulesList, SignUpEmailRulesList, SignUpPasswordRulesList} from './helpers/inputCheckerInfosLists';
import ErrorsListNew from './components/ErrorsListNew/ErrorsListNew';
import {RuleInfo} from './components/ErrorsListNew/types/ErrorsList_NewTypes';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import PageStyled from "../../StyledComponents/PageStyled";
import InputFieldStyled from "../../StyledComponents/InputFieldStyled";
import ButtonStyled from "../../StyledComponents/ButtonStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";


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
        <PageStyled>
            <div className="flex flex-col gap-6 w-full h-screen sm:h-3/5 sm:w-96 sm:justify-start sm:rounded sm:shadow-lg">
                <Header1Styled>Sign Up</Header1Styled>
                <form className="flex flex-col content-between" onSubmit={handleFormSubmit}>

                    <InputFieldStyled type="text" inputVal={login} htmlFor="login" labelText="Login" onChange={(event: React.FormEvent<HTMLInputElement>) => {handleLoginChange(event)}}/>
                    <ErrorsListNew errorInfosList={loginErrorInfoList} serverErrors={store.getLoginServerErrors()}/> 
                    <br/>

                    <InputFieldStyled type="email" inputVal={email} htmlFor="email" labelText="Email" onChange={(event: React.FormEvent<HTMLInputElement>) => {handleEmailChange(event)}}/>
                    <ErrorsListNew errorInfosList={emailErrorInfoList} serverErrors={store.getEmailServerErrors()}/>
                    <br/>

                    <InputFieldStyled type="password" inputVal={password} htmlFor="password" labelText="Password" onChange={(event: React.FormEvent<HTMLInputElement>) => {handlePasswordChange(event)}}/>
                    <ErrorsListNew errorInfosList={passwordErrorInfoList} serverErrors={passwordServerErrors}/>
                    <br/>
                    
                    <div className="flex flex-col gap-2">
                        <ButtonStyled type="submit" value="Login" text="Login" isDisabled={isSubmitFormDisabled} isPrimary={true}/>
                        <ButtonStyled onClick={handleReset} type="reset" value="Reset" text="Reset"  isPrimary={false}/> 
                    </div>

                </form>
            </div>

        </PageStyled>
    );
}

// export default SignUpPage;
export default observer(SignUpPage);