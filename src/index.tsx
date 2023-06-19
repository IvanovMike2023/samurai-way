import React from 'react';
import './index.css';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerender = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
store.subscribe(rerender)
rerender()










