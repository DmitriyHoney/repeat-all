//Libraries
import React from 'react';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
import store from './Redux/redux-store';
//Styles
import './index.css';
//Components
import App from "./App";
import {Provider} from "react-redux";


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </BrowserRouter>
        ,document.getElementById('root')
    );
}

store.subscribe(() => renderEntireTree());
renderEntireTree()

serviceWorker.unregister();
