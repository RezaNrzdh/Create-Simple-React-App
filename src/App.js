import {Outlet, Link} from 'react-router-dom';
import Layout from './hoc/layout';

const App = () => {
  return(
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
