import {observer} from 'mobx-react-lite';
import { ReactNode } from 'react';

type InputFieldProps = {
    inputVal: string,
    htmlFor: string,
    labelText: string,
    type?: string,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void,
    isError?: boolean,
    children?: ReactNode;
}

function InputFieldStyled({inputVal, htmlFor, labelText, onChange, type = 'text', isError = false, children} : InputFieldProps) {

    return (
        <div className="flex flex-col content-evenly gap-1">
            <label className="font-sofia font-normal text-warmGray-100 ml-4 text-start" htmlFor={htmlFor}>{labelText}</label>
            {/* <input data-is-error={isError} type={type} className="ml-4 mr-4 h-12  bg-transparent-input text-warmGray-100 rounded-lg p-2 data-[is-error=true]:border data-[is-error=true]:border-red-400 "  value={inputVal} onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(event)} name={htmlFor}  required/> */}
            <div className='ml-4 mr-4 h-12 p-2 rounded-lg bg-transparent-input  data-[is-error=true]:border data-[is-error=true]:border-red-400 relative' >
                <input data-is-error={isError} type={type} className="h-full w-full bg-transparency-zero  text-warmGray-100"  value={inputVal} onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(event)} name={htmlFor}  required/>
                {children}            
            </div>
        </div>
    );
}

export default observer(InputFieldStyled);
