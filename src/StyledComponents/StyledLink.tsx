import { Link } from "react-router-dom";

type StyledLinkProps = {
    to: string,
    text:string
}


function StyledLink({to, text}:  StyledLinkProps) {

    return <Link className="flex font-sofia items-center justify-center h-24 sm:h-16 w-5/6 sm:w-3/5 p-3 text-white border-2 bg-gray-800 border-gray-1000 rounded-md opacity-25 " to={to}>{text}</Link>
}

export default StyledLink;