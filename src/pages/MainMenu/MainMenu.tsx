import { Link } from "react-router-dom";
import { useContext } from "react"
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import PageStyled from "../../StyledComponents/PageStyled";
import Header1Styled from "../../StyledComponents/Header1Styled";
import StyledLink from "../../StyledComponents/StyledLink";
import MenuWrapper from "../../StyledComponents/MenuWrapper";


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
        <PageStyled>
            <MenuWrapper>
                <Header1Styled>Main Menu</Header1Styled>
                <StyledLink text="Friends" to='/friends'/>
                <StyledLink text="Training" to="/trainingPage"/>
                <StyledLink text="My statistics" to="/myStatisics"/>
                <button className="flex items-center justify-center h-24 sm:h-16 w-5/6 sm:w-3/5 p-3 text-white border-2 bg-gray-800 border-gray-1000 rounded-md opacity-25 " onClick={logOutClickHandler}>Log out</button>
            </MenuWrapper>
        </PageStyled>
    )
}