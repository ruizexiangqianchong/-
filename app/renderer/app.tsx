import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './style.scss';

/**
 * 渲染主函数
 * @return  {Promise<JSX.Element>}
 */
function App(): JSX.Element {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById('root'));
