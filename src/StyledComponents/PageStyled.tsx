import React, { ReactNode } from 'react';

type PageStyledProps = {

    children: ReactNode,
}

function PageStyled({children}:PageStyledProps) {

    return (
        <div className="flex min-h-screen max-h-screen max-w-full min-w-full bg-white justify-center items-start">
            {children}
        </div>
    )
}

export default PageStyled;