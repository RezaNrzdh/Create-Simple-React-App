import {Outlet, Link} from 'react-router-dom';

const App = () => {
  return(
    <div>
      <nav>
        <h1>THE SIMPLE REACT APP</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
