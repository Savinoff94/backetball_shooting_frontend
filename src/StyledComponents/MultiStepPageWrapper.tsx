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
        className="flex flex-col bg-white rounded-lg w-full h-fit sm:w-96 self-center justify-evenly p-2 shadow-lg sm:data-[is-wide-screen-needed=true]:w-2/3 landscape:data-[is-flex-row-needed=true]:flex-row landscape:data-[is-flex-row-needed=true]:h-fit landscape:data-[is-flex-row-needed=true]:w-fit"
        >
            {children}
        </div>
    )
}

export default MultiStepPageWrapper;