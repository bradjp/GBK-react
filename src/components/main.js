
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Card from './card';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/card' component={Card} />
  </Switch>
)

export default Main;

