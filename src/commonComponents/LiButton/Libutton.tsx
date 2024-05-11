import React, { ReactNode } from 'react';

type LiButtonProps = {
    isClicked: boolean,
    handleClick: () => void,
    children: ReactNode;
}

export default function LiButton({isClicked, handleClick, children} : LiButtonProps) {

    return (
        <li>
            <button data-is-clicked={isClicked} className='transition duration-500 m-1 box-border data-[is-clicked=true]:scale-105 border-warmGray-900 border-2 text-warmGray-100 shadow-xl data-[is-clicked=true]:border-warmGray-1000 data-[is-clicked=true]:shadow-warmGray-900 font-sofia rounded-lg p-1 pl-2 pr-2'onClick={() => {handleClick()}}>
                {children}
            </button>
        </li>
    )
} 