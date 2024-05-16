import {useState, useContext} from 'react';
import {SignUpLoginRulesList, SignUpEmailRulesList, SignUpPasswordRulesList} from './helpers/inputCheckerInfosLists';
import ErrorsListNew from './components/ErrorsListNew/ErrorsListNew';
import {RuleInfo} from './components/ErrorsListNew/types/ErrorsList_NewTypes';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import PageStyled from "../../StyledComponents/PageStyled";
import InputFieldStyled from "../../StyledComponents/inputs/InputFieldStyled";
import ButtonStyled from "../../StyledComponents/ButtonStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";
import {shouldDisplayErrorInInput} from '../../helpers/common'
import SignFormWrapper from '../../StyledComponents/SignFormWrapper';
import LoadingBar from '../../StyledComponents/LoadingBar';
import PasswordInput from '../../StyledComponents/inputs/PasswordInput';



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
    
    
    return (
        <PageStyled>
            <SignFormWrapper>
                <Header1Styled classes='text-warmGray-100'>Sign Up</Header1Styled>
                <form className="flex flex-col content-between" onSubmit={handleFormSubmit}>
                    <InputFieldStyled
                        type="text"
                        inputVal={login}
                        htmlFor="login"
                        labelText="Login"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {handleLoginChange(event)}}
                        isError={shouldDisplayErrorInInput(login, loginErrorInfoList, store.getLoginServerErrors())}
                    />
                    <ErrorsListNew
                        errorInfosList={loginErrorInfoList}
                        serverErrors={store.getLoginServerErrors()}
                    /> 

                    <InputFieldStyled
                        type="email"
                        inputVal={email}
                        htmlFor="email"
                        labelText="Email"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {handleEmailChange(event)}}
                        isError={shouldDisplayErrorInInput(email, emailErrorInfoList, store.getEmailServerErrors())}
                    />
                    <ErrorsListNew 
                        errorInfosList={emailErrorInfoList}
                        serverErrors={store.getEmailServerErrors()}
                    />

                    <PasswordInput
                    password={password}
                    isError={shouldDisplayErrorInInput(password, passwordErrorInfoList, store.getPasswordServerErrors())}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {handlePasswordChange(event)}}
                    />
                    <ErrorsListNew 
                        errorInfosList={passwordErrorInfoList}
                        serverErrors={store.getPasswordServerErrors()}
                    />
                    
                    <div className="flex flex-col gap-2">
                        <ButtonStyled type="submit" value="Login" isDisabled={isSubmitFormDisabled} isPrimary={'primary'}>{"Login"}</ButtonStyled>
                        <ButtonStyled onClick={handleReset} type="reset" value="Reset"  isPrimary={'secondary'}>{"Reset"}</ButtonStyled> 
                    </div>
                </form>

                {store.isLoading ? <LoadingBar/> : null}
                
            </SignFormWrapper>
        </PageStyled>
    );
}

export default observer(SignUpPage);