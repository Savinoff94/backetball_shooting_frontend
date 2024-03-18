import { ReactNode } from 'react';

type MultiStepPageType = {

    children: ReactNode,
    isFlexRowNeeded?: boolean,
    isWideScreenNeeded?: boolean
}

function MultiStepPageWrapper({children, isFlexRowNeeded = false, isWideScreenNeeded = false}:MultiStepPageType) {

    return (
        <div 
        data-is-flex-row-needed={isFlexRowNeeded}
        data-is-wide-screen-needed={isWideScreenNeeded}
        className="flex flex-col bg-white rounded-lg w-full h-fit sm:w-96 self-center justify-evenly p-2 shadow-lg sm:data-[is-wide-screen-needed=true]:w-2/3 data-[is-flex-row-needed=true]:flex-row data-[is-flex-row-needed=true]:h-fit data-[is-flex-row-needed=true]:w-fit"
        >
            {children}
        </div>
    )
}

export default MultiStepPageWrapper;