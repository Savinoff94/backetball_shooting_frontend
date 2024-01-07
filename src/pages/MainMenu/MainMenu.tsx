import { Link } from "react-router-dom";
import { useContext } from "react"
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';



export default function MainMenu() : JSX.Element {

    const {store} = useContext(Context);

    const navigate = useNavigate();

    const logOutClickHandler = async () => {
        
        await store.logout();

        if(!store.isAuth) {

            navigate('/');
        }
    }

    const friendsLink = "/friends/" + store.user.login;

    return (
        <>
            <Link to={friendsLink}>Friends</Link>
            <Link to="/trainingPage">Training</Link>
            <Link to="/myStatisics">My statistics</Link>
            <button onClick={logOutClickHandler}>Log out</button>
        </>
    )
}