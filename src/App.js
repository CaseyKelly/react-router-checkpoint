import React from 'react';
import Login from './components/Login';
import TopNav from './components/TopNav';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <TopNav />
      <Login />
    </div>
  );
};

export default App;
