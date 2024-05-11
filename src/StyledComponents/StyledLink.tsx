import { Link } from "react-router-dom";

type StyledLinkProps = {
    to: string,
    text:string
}


function StyledLink({to, text}:  StyledLinkProps) {

    return <Link className="flex font-sofia opacity-90 items-center justify-center h-24 sm:h-16 w-5/6 sm:w-3/5 p-3 text-warmGray-100 bg-main rounded-md text-lg" to={to}>{text}</Link>
}

export default StyledLink;