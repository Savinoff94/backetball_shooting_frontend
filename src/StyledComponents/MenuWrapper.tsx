import { ReactNode } from "react"

type MenuWrapperProps = {
    children: ReactNode
}

function MenuWrapper({children} : MenuWrapperProps) {

    return (
        <div className="flex flex-col bg-white self-center w-full h-96 sm:w-96 justify-evenly items-center rounded-lg shadow-lg ml-2 mr-2 sm:ml-0 sm:mr-0">
            {children}
        </div>
    )
}

export default MenuWrapper