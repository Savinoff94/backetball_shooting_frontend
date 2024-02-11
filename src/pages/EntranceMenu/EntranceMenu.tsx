import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';



export default function EntranceMenu() :JSX.Element {

    const {store} = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {

        if(localStorage.getItem('token')) {

            store.checkAuth()
        }
    },[]);


    if(store.isAuth) {

        navigate('/mainMenu');
    }

    return (
    <>
    <Link to="/signup">Sign up</Link>
    <Link to="/signin">Sign in</Link>
    </>);
}