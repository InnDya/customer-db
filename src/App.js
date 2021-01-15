import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div className="container">
    <Header />
    

      { /*<ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/create">Create Customer</Link>
        </li>
      </ul> */ }

      <Switch>

        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/home/create" component={CustomerCreatePage} />
        <PrivateRoute path="/home/:id/edit" component={CustomerUpdatePage} />
        <PrivateRoute path="/home/:id" component={CustomerDetailPage} />
        <PrivateRoute path="/home" component={CustomerListPage} />

      </Switch>

    </div>
  );
}

export default App;
