import React, { ReactNode } from 'react';

type LiButtonProps = {
    isClicked: boolean,
    handleClick: () => void,
    children: ReactNode;
}

export default function LiButton({isClicked, handleClick, children} : LiButtonProps) {

    const borderColor = isClicked ? 'green' : 'red';

    return (
        <li>
            <button style={{borderColor}} onClick={() => {handleClick()}}>
                {children}
            </button>
        </li>
    )
} 