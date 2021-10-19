import { Route, Redirect } from 'react-router';
import checkAuth from 'src/Utils/checkAuth';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (checkAuth() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;