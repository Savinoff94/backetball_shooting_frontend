import { useState, useContext } from "react"
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import ErrorsListNew from "../SignUp/components/ErrorsListNew/ErrorsListNew";
import {observer} from 'mobx-react-lite';
import PageStyled from "../../StyledComponents/PageStyled";
import InputFieldStyled from "../../StyledComponents/inputs/InputFieldStyled";
import ButtonStyled from "../../StyledComponents/ButtonStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";
import {shouldDisplayErrorInInput} from '../../helpers/common'
import SignFormWrapper from "../../StyledComponents/SignFormWrapper";
import LoadingBar from "../../StyledComponents/LoadingBar";
import PasswordInput from "../../StyledComponents/inputs/PasswordInput";


function SignInPage() : JSX.Element {

    const navigate = useNavigate();

    const {store} = useContext(Context)

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isSubmitDisabled = login === '' || password === '';
    const isResetDisabled = !(login !== '' || password !== '');

    const handleReset = () => {

        setLogin(''); 
        setPassword(''); 
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()

        await store.login(login, password);

        if(store.isAuth) {
            navigate('/mainMenu');
        }
        else {
            console.log('sign in handleFormSubmit error no auth');
        }
    }



    return (
        <PageStyled>
            <SignFormWrapper>
                <Header1Styled classes="text-warmGray-100">Sign In</Header1Styled>
                <form className="flex flex-col content-between h-4/5" onSubmit={handleFormSubmit}>

                    <InputFieldStyled
                        inputVal={login}
                        htmlFor="login"
                        labelText="Login"onChange={(event: React.FormEvent<HTMLInputElement>) => {setLogin(event.currentTarget.value); store.setLoginServerErrors([])}}
                        isError={shouldDisplayErrorInInput(login, [], store.getLoginServerErrors())}
                    />
                    <ErrorsListNew
                        errorInfosList={[]}
                        serverErrors={store.getLoginServerErrors()}
                    />

                    <PasswordInput
                    password={password}
                    isError={shouldDisplayErrorInInput(password, [], store.getPasswordServerErrors())}
                    onChange={(event: React.FormEvent<HTMLInputElement>) : void => {setPassword(event.currentTarget.value); store.setPasswordServerErrors([])}}
                    />
                    <ErrorsListNew 
                        errorInfosList={[]} 
                        serverErrors={store.getPasswordServerErrors()}
                    />

                    <div className="flex flex-col gap-2">
                        <ButtonStyled
                            type="submit"
                            value="Login"
                            isDisabled={isSubmitDisabled}
                            isPrimary={'primary'}
                        >
                            {"Login"}
                        </ButtonStyled> 
                        <ButtonStyled 
                        onClick={handleReset}
                        type="reset"
                        value="Reset"
                        isPrimary={'secondary'}
                        isDisabled={isResetDisabled}
                        >
                            {"Reset"}
                        </ButtonStyled> 
                    </div>
                </form>

                {store.isLoading ? <LoadingBar/> : null}
                
            </SignFormWrapper>
        </PageStyled>
    )
}

export default observer(SignInPage)