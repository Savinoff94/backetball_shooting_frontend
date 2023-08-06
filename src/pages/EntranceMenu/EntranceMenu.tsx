import { Link } from "react-router-dom";
export default function EntranceMenu() :JSX.Element {

    return (
    <>
    <Link to="/signup">Sign up</Link>
    <Link to="/signin">Sign in</Link>
    </>);
}