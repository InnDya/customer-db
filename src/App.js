import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div>

      <Header />

      <div className="container">

        <Switch>

          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/home/create" component={CustomerCreatePage} />
          <PrivateRoute path="/home/:id/edit" component={CustomerUpdatePage} />
          <PrivateRoute path="/home/:id" component={CustomerDetailPage} />
          <PrivateRoute path="/home" component={CustomerListPage} />

        </Switch>

      </div>

      <Footer />

    </div>
  );
}

export default App;
