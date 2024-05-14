import {observer} from 'mobx-react-lite';

type InputStyledProps = {
    value: string,
    name: string,
    type?: string,
    placeholder?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
}


function InputStyled({value, name, type='text', placeholder = '', onChange} : InputStyledProps) {

    return (
        <input placeholder={placeholder} type={type} className="focus:outline-none ml-4 mr-4 h-12 rounded-lg p-2 border border-purple-200"  value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)} name={name}  required/>
    )
}

export default observer(InputStyled);
