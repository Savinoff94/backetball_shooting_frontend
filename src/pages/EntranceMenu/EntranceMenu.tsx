import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import { func } from "prop-types";



export default function EntranceMenu() :JSX.Element {

    const {store} = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {

        navigateToAfterCheck();
    },[]);

    const navigateToAfterCheck = async () => {
        
        if(localStorage.getItem('token')) {

            await store.checkAuth()
        }

        if(store.isAuth) {

            navigate('/mainMenu');
        }
    }


    if(store.isAuth) {

        navigate('/mainMenu');
    }

    return (
    <>
    <Link to="/signup">Sign up</Link>
    <Link to="/signin">Sign in</Link>
    </>);
}