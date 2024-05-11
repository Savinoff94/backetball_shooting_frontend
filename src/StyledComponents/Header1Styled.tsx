import { ReactNode } from "react";

type Header1Props = {
    children:ReactNode
    classes?: string
}

function Header1Styled({children, classes = ''}:Header1Props) {

    return <h1 className={`font-sofia mt-2 ml-4 text-start text-2xl font-extrabold ${classes}`}>{children}</h1>
}

export default Header1Styled;