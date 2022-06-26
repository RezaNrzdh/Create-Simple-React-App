import {Outlet} from 'react-router-dom';
import Layout from './hoc/layout';
import {createGlobalStyle} from 'styled-components';

const App = () => {
  return(
    <Layout>
      <GlobalStyle />
      <Outlet />
    </Layout>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  #root{
    height: 100%;
  }
`;

export default App;
