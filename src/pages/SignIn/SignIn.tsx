import { useState, useContext } from "react"
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';


export default function SignInPage() : JSX.Element {

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
        <>
        <form onSubmit={handleFormSubmit}>
                <label htmlFor="login">Login: </label>
                <input  value={login} onChange={(event: React.FormEvent<HTMLInputElement>) => {setLogin(event.currentTarget.value)}} type="text" name="login"  required/>
                
                <br/>
                <label htmlFor="password">password: </label>
                <input value={password} onChange={(event: React.FormEvent<HTMLInputElement>) : void => {setPassword(event.currentTarget.value)}} type="password" name="password"  required/>
                
                <br/>
                <button disabled={isDisabled} type="submit" value="Login"/>
                
                <button onClick={handleReset} type="reset" value="Reset"/>
            </form>
        </>
    )
}