import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;