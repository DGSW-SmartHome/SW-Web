import { Route } from 'react-router';

import Main from './Main/Index';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import More from './More/More';
import Lock from './Lock/Lock';
import PrivateRoute from './CustomRoute/PrivateRoute';

const Index = () => {
  return (
    <>
      <Route exact path='/' component={Main} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/setting' component={More} />
      <PrivateRoute component={Lock} path='/lock' exact />
    </>
  );
};

export default Index;