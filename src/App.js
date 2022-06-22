import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './about';

const App = () => {
  return(
    <Router>
      <>
        <div>
          <h1>THE SIMPLE REACT APP</h1>
        </div>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
