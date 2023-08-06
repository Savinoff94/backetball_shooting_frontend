import { useState } from "react"

export default function SignInPage() : JSX.Element {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isDisabled = login === '' || password === '' ? true : false;

    const handleReset = () => {

        setLogin(''); 
        setPassword(''); 
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
    }



    return (
        <>
        <form onSubmit={handleFormSubmit}>
                <label htmlFor="login">Login: </label>
                <input  value={login} onChange={(event: React.FormEvent<HTMLInputElement>) => {setLogin(event.currentTarget.value)}} type="text" name="login"  required/>
                
                <br/>
                <label htmlFor="email">email: </label>
                <input value={password} onChange={(event: React.FormEvent<HTMLInputElement>) : void => {setPassword(event.currentTarget.value)}} type="email" name="email"  required/>
                
                <br/>
                <button disabled={isDisabled} type="submit" value="Login"/>
                
                <button onClick={handleReset} type="reset" value="Reset"/>
            </form>
        </>
    )
}