import { Route, Redirect } from 'react-router';
import checkAuth from 'src/Utils/checkAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        checkAuth() ? (
          <Component {...props} parentMenu={props.menu} />
        ) : (
          <Redirect to='/login' />
        )
      )}
    />
  )
}

export default PrivateRoute;