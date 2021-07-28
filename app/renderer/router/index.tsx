import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import routerPath from '@coomon/constants/router';
import Root from '@src/page/index';
import Resume from '@src/page/resume/connect';
const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={routerPath.root} exact>
          <Root />
        </Route>
        <Route path={routerPath.resume} exact>
          <Resume />
        </Route>
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  );
};

export default Router;
