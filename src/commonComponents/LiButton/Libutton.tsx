import React, { ReactNode } from 'react';

type LiButtonProps = {
    isClicked: boolean,
    handleClick: () => void,
    children: ReactNode;
}

export default function LiButton({isClicked, handleClick, children} : LiButtonProps) {

    return (
        <li>
            <button data-is-clicked={isClicked} className='border data-[is-clicked=true]:border-2 shadow-sm data-[is-clicked=true]:shadow-green-200 data-[is-clicked=true]:border-green-200 font-sofia rounded-lg p-1'onClick={() => {handleClick()}}>
                {children}
            </button>
        </li>
    )
} 