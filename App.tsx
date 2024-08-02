import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, register, fetchUsers } from './actions';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import UserDirectory from './components/UserDirectory';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={UserDirectory} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;