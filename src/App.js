import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './features/user/Login';
import Register from './features/user/Register';
import Dashboard from './features/user/Dashboard';
import PrivateRoutes from './helpers/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* TODO: Sprawdzić ścieżki */}
          <Route exact component={Login} path='/login' /> 
          <Route exact component={Register} path='/register' />
          <PrivateRoutes exact component={Dashboard} path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
