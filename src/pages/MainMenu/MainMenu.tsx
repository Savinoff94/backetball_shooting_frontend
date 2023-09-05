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


    return (
        <>
            <Link to="/friends">Friends</Link>
            <button onClick={logOutClickHandler}>Log out</button>
        </>
    )
}