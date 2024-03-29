import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";
import * as serviceWorker from './serviceWorker';
export let rerender=()=> {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
rerender(store.getState());
store.subscribe(rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
