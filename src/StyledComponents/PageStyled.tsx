import React, { ReactNode } from 'react';

type PageStyledProps = {

    children: ReactNode,
}

function PageStyled({children}:PageStyledProps) {

    return (
        
        // <div className="flex min-h-screen max-w-full min-w-full bg-[#f2f2f2] justify-center items-start overflow-y-scroll bg-combined bg-left-bottom bg-cover md:bg-center">
        <div className="flex h-dvh max-w-full min-w-full bg-[#f2f2f2] justify-center items-start overflow-y-scroll bg-combined bg-left-bottom bg-cover md:bg-center no-scrollbar">
            {children}
        </div>
    )
}

export default PageStyled;