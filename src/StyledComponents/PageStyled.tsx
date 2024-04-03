import React, { ReactNode } from 'react';

type PageStyledProps = {

    children: ReactNode,
}

function PageStyled({children}:PageStyledProps) {

    return (
        
        <div className="flex min-h-screen max-w-full min-w-full bg-[#f2f2f2] justify-center items-start overflow-y-scroll">
            {children}
        </div>
    )
}

export default PageStyled;