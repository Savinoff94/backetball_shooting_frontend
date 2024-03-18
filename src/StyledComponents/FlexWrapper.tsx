import { ReactNode } from 'react';

type FlexWrapperType = {

    children: ReactNode,
    isColumn?: boolean
}

function FlexWrapper({children, isColumn = false}:FlexWrapperType) {

    return (
        <div data-is-column={isColumn} className='flex data-[is-column=true]:flex-col gap-2'>
            {children}
        </div>
    )
}

export default FlexWrapper;