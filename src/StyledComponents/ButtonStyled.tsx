import {observer} from 'mobx-react-lite';

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined
    value?: string,
    text: string,
    isDisabled?: boolean,
    onClick?: () => void,
    isPrimary: boolean,
}

function ButtonStyled({type='button', value='', text, isDisabled, onClick, isPrimary} : ButtonProps) {

    isDisabled = isDisabled === undefined ? false : isDisabled;

    const color = isPrimary ? 'bg-indigo-500' : 'bg-slate-500'

    return (
        <button className={`font-sofia font-bold text-lg ml-4 mr-4 h-12 rounded-lg p-1 text-white ${color} ${isDisabled? 'opacity-30' : ''}`} onClick={onClick} disabled={isDisabled} type={type} value={value}>{text}</button>
    );
}

export default observer(ButtonStyled);
