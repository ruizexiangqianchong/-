import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Router from './router';
import './style.scss';

/**
 * 渲染主函数
 * @return  {Promise<JSX.Element>}
 */
function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
