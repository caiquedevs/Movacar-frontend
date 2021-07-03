import { Route } from 'react-router-dom';

const GuardedRoute = ({ component: Component, ...props }: any) => {
  const renderRoute = (routeProps: any) => <Component {...routeProps} />;
  return <Route {...props} render={renderRoute} />;
};

export default GuardedRoute;
