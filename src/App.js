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
  }
  #root{
    height: 100%;
  }
`;

export default App;
