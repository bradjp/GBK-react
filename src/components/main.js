import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';

const Main = () => {
  <Switch>
    <Route exact path='/' component={Homepage} />
  </Switch>
}

export default Main;