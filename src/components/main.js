
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Card from './card';
import About from './about';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/card' component={Card} />
    <Route exact path='/about' component={About} />
  </Switch>
)

export default Main;

