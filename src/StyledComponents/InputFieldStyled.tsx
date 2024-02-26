import {observer} from 'mobx-react-lite';

type InputFieldProps = {
    inputVal: string,
    htmlFor: string,
    labelText: string,
    type?: string
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

function InputFieldStyled({inputVal, htmlFor, labelText, onChange, type = 'text'} : InputFieldProps) {

    return (
        <div className="flex flex-col content-evenly gap-1">
            <label className="font-sofia font-normal text-gray-500 ml-4 text-start" htmlFor={htmlFor}>{labelText}</label>
            <input type={type} className="ml-4 mr-4 h-12 rounded-lg p-2 border border-purple-200"  value={inputVal} onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(event)} name={htmlFor}  required/>
        </div>
    );
}

export default observer(InputFieldStyled);
