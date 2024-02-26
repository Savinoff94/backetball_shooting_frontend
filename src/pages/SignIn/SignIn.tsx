import { useState, useContext } from "react"
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import ErrorsListNew from "../SignUp/components/ErrorsListNew/ErrorsListNew";
import {observer} from 'mobx-react-lite';
import PageStyled from "../../StyledComponents/PageStyled";
import InputFieldStyled from "../../StyledComponents/InputFieldStyled";
import ButtonStyled from "../../StyledComponents/ButtonStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";

function SignInPage() : JSX.Element {

    const navigate = useNavigate();

    const {store} = useContext(Context)

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isDisabled = login === '' || password === '' ? true : false;

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
            <div className="flex flex-col justify-center gap-8 w-full h-screen sm:h-96 sm:w-96 sm:justify-start sm:rounded sm:shadow-lg">
                <Header1Styled>Sign In</Header1Styled>
                <form className="flex flex-col content-between h-4/5" onSubmit={handleFormSubmit}>

                    <InputFieldStyled inputVal={login} htmlFor="login" labelText="Login" onChange={(event: React.FormEvent<HTMLInputElement>) => {setLogin(event.currentTarget.value); store.setLoginServerErrors([])}}/>
                    <ErrorsListNew errorInfosList={[]} serverErrors={store.getLoginServerErrors()}/>
                    <br/>

                    <InputFieldStyled type="password" inputVal={password} htmlFor="password" labelText="Password" onChange={(event: React.FormEvent<HTMLInputElement>) : void => {setPassword(event.currentTarget.value); store.setPasswordServerErrors([])}}/>
                    <ErrorsListNew errorInfosList={[]} serverErrors={store.getPasswordServerErrors()}/>
                    <br/>

                    <div className="flex flex-col gap-2">
                        <ButtonStyled type="submit" value="Login" text="Login" isDisabled={isDisabled} isPrimary={true}/> 
                        <ButtonStyled onClick={handleReset} type="reset" value="Reset" text="Reset"  isPrimary={false}/> 
                    </div>
                    
                </form>
            </div>
        </PageStyled>
    )
}

export default observer(SignInPage)