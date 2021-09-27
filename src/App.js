import { Route } from 'react-router';

import Main from './components/Main/Main';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
    </>
  );
}

export default App;
