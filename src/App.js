import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import LoginPage from './pages/LoginPage';

function App() {
  const emptyUser = { firstName: "", lastName: "", email: "" };
  const [userInfo, setUserInfo] = useState(emptyUser);

  useEffect(() => {
    updateUserInfo();
  }, []);

  const updateUserInfo = () => {
    const data = localStorage.getItem("userInfo");
    setUserInfo(data ? JSON.parse(data) : emptyUser);
  }

return (
    <div>

      <Header userInfo={userInfo} />

      <div className="container">

        <Switch>

          <Route path="/login" render={(props) => (<LoginPage {...props} updateUserInfo={updateUserInfo} />)} />
          <PrivateRoute path="/home/create" component={CustomerCreatePage} />
          <PrivateRoute path="/home/:id/edit" component={CustomerUpdatePage} />
          <PrivateRoute path="/home/:id" component={CustomerDetailPage} />
          <PrivateRoute path="/home" component={CustomerListPage} />
          <Redirect from="/" to="/home" />

        </Switch>

      </div>

    </div>
  );
}

export default App;
