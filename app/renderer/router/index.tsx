import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/page/index';
import Resume from '@src/page/resume';
const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Root />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  );
};

export default Router;
