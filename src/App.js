import { Route } from 'react-router';

import Main from './components/Main/Main';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <Route exact path='/' component={Main} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
    </>
  );
}

export default App;
