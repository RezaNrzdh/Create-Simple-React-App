import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyled>
            <h1>REACT APP</h1>
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/list'>List</Link>
            </Nav>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding-left:16px;
    padding-bottom:16px;
    box-shadow: 0px 16px 48px rgba(0,0,0,0.08);
    box-sizing: border-box;
`;

const Nav = styled.nav`
    display: flex;
    width: 100%;
    a{
        padding: 16px;
        margin-right: 16px;
        background-color: #F1F1F1;
        transition: all ease-in-out 0.3s;
        text-decoration: none;
        color: black;
        &:hover{
            background-color: #04A56A;
            color: white;
        }
    }
`;