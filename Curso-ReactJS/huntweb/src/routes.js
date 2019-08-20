import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

// BrowserRouter - define que as rotas usadas são através de um browser
// Switch - apenas uma rota pode ser chamada ao mesmo tempo
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;