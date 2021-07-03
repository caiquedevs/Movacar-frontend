import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import allRoutes from './routes';
import GuardedRoute from './components/GuardedRoutes';
import GlobalStyle from './styles/GlobalStyle';
import store from './store';

function App() {
  const renderRoutes = (route: any, index: number) => (
    <GuardedRoute
      exact
      key={index}
      path={route.path}
      component={route.component}
    />
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>{allRoutes.map(renderRoutes)}</Switch>
        <GlobalStyle />
        <ToastContainer autoClose={5000} className="toast-container" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
