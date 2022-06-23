import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyled>
            <nav>
                <h1>THE SIMPLE REACT APP</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 0 24px;
    box-shadow: 0px 16px 48px rgba(0,0,0,0.08);
    box-sizing: border-box;
`;