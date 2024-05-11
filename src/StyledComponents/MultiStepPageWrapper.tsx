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
        className="relative bg-main opacity-85 flex flex-col  rounded-lg w-full h-fit sm:w-96 self-center justify-evenly p-2 shadow-lg sm:data-[is-wide-screen-needed=true]:w-2/3 max-md:landscape:data-[is-flex-row-needed=true]:flex-row max-md:landscape:data-[is-flex-row-needed=true]:h-fit max-md:landscape:data-[is-flex-row-needed=true]:w-fit"
        >
            {children}
        </div>
    )
}

export default MultiStepPageWrapper;