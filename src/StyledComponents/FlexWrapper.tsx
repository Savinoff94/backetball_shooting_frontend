import { ReactNode } from 'react';

type FlexWrapperType = {

    children: ReactNode,
    isColumn?: boolean,
    classes ?: string
}

function FlexWrapper({children, isColumn = false, classes=''}:FlexWrapperType) {

    return (
        <div data-is-column={isColumn} className={`flex data-[is-column=true]:flex-col gap-2 ${classes}`}>
            {children}
        </div>
    )
}

export default FlexWrapper;