import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style.scss';

/**
 * 渲染主函数
 * @return  {Promise<JSX.Element>}
 */
function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="title">可视化简历平台aa</div>
          <div>这是 Electron + React </div>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
