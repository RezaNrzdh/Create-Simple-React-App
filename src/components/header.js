import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <h1>THE SIMPLE REACT APP</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    );
}

export default Header;