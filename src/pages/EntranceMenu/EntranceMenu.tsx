import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import PageStyled from "../../StyledComponents/PageStyled";
import StyledLink from "../../StyledComponents/StyledLink";
import MenuWrapper from "../../StyledComponents/MenuWrapper";
// import BackgroundImage from '../../../public/backgroundImages/lone_basket.jpg'



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

    return (
        <PageStyled>
            <MenuWrapper>
                <StyledLink to="/signin" text="Sign in"/>
                <StyledLink to="/signup" text="Sign up"/>
            </MenuWrapper>
        </PageStyled>
    );
}