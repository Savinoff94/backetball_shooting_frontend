import { ReactNode } from "react"

type MenuWrapperProps = {
    children: ReactNode
}

function MenuWrapper({children} : MenuWrapperProps) {

    return (
        <div className="flex flex-col gap-3 mt-20 w-full h-screen sm:h-96 sm:w-96 sm:justify-evenly items-center sm:rounded sm:shadow-lg">
            {children}
        </div>
    )
}

export default MenuWrapper