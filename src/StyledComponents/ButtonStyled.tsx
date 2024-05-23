import {observer} from 'mobx-react-lite';
import { ReactNode } from 'react';

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined
    value?: string,
    children: ReactNode,
    isDisabled?: boolean,
    onClick?: () => void,
    isPrimary: 'primary' | 'secondary' | 'thirdly',
    classes?: string
}

function ButtonStyled({type='button', value='', children, isDisabled = true, onClick, isPrimary, classes = ''} : ButtonProps) {

    const bgColor = buttonColors[isPrimary];
    const bgHoverColor = buttonHoverColors[isPrimary]
    const textColor = buttonTextColors[isPrimary]

    return (
        
        <button className={`font-sofia transition duration-200 font-bold text-lg ml-4 mr-4 h-12 rounded-lg p-1 ${textColor} ${bgColor} ${bgHoverColor} ${isDisabled? 'opacity-30' : 'opacity-90'} ${classes}`} onClick={onClick} disabled={isDisabled} type={type} value={value}>{children}</button>
    );
}

const buttonColors = {
    primary:'bg-orange-700',
    secondary:'bg-slate-500',
    thirdly:'bg-[#f2f2f2]'
}

const buttonHoverColors = {

    primary:'hover:bg-orange-900',
    secondary:'hover:bg-slate-700',
    thirdly:'hover:bg-slate-200'
}

const buttonTextColors = {

    primary:'text-warmGray-100',
    secondary:'text-warmGray-100',
    thirdly:'text-black'
}

export default observer(ButtonStyled);
