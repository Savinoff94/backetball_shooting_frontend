import InputFieldStyled from "./InputFieldStyled";
import EyeButton from "../../commonComponents/Eyes/EyeButton";
import { useState } from "react";

type PasswordInputPropsType = {
    password: string,
    onChange:(event: React.FormEvent<HTMLInputElement>) => void,
    isError: boolean
}

export default function PasswordInput({password, onChange, isError} : PasswordInputPropsType) {

    const [passwordHidden, setPasswordHidden] = useState(true)

    return (
        <InputFieldStyled
            type={passwordHidden ? "password" : "text"}
            inputVal={password}
            htmlFor="password"
            labelText="Password"
            onChange={onChange}
            isError={isError}
        >
            <EyeButton
            isPasswordHidden={passwordHidden}
            onClick={() => setPasswordHidden((val)=> {
                console.log('qwqweweq')
                return !val
            })}
            classes="absolute right-3 h-8"
            />
        </InputFieldStyled>
    )
}