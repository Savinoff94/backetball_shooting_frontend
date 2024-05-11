import React, { useState } from 'react';
import SearchIcon from "../commonComponents/SearchIcon/SearchIcon"

type InputStyledProps = {
    value: string,
    name: string,
    type?: string,
    placeholder?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


function SearchField({value, name, type='text', placeholder = '', onChange} : InputStyledProps) {

    return(
        <div className="ml-4 mr-4 rounded-lg flex justify-around  opacity-75 p-1 bg-main">
            <input className="w-5/6 text-warmGray-100 bg-transparency-zero focus:outline-none" placeholder={placeholder} type={type}  value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)} name={name}  required/>
            <i><SearchIcon/></i>
        </div>
    )
}

export default SearchField;