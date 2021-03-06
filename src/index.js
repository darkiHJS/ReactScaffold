import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './common/configStore'
import routeConfig from './common/routeConfig'
import Root from './Root';
import * as serviceWorker from './serviceWorker';

const store = configStore()

ReactDOM.render(<Root store={store} routeConfig={routeConfig}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
