import { Link } from "react-router-dom";
import StyledLink from "../../StyledComponents/StyledLink";
import MenuWrapper from "../../StyledComponents/MenuWrapper";
import PageStyled from "../../StyledComponents/PageStyled";


export default function MyStatisticsMenu() : JSX.Element {


    return (
        <PageStyled>
            <MenuWrapper>
                <StyledLink to='/manageMyStatistics' text="Manage my statistics"/>
                <StyledLink to='/chartsPage' text="Charts"/>
            </MenuWrapper>
        </PageStyled>
    )
}