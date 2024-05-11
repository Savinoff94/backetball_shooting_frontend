import { ReactNode } from 'react';

type SignFormWrapperType = {

    children: ReactNode,
}

function SignFormWrapper({children}:SignFormWrapperType) {

    return (
        <div className="relative flex flex-col self-center gap-4 w-full h-fit pb-4 sm:w-96 sm:justify-start rounded-lg shadow-lg bg-main opacity-85 ml-2 mr-2 sm:ml-0 sm:mr-0">
            {children}
        </div>
    )
}

export default SignFormWrapper;