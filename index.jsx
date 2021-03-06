import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./src/App";
import { BrowserRouter } from 'react-router-dom'
import { store } from "./store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"));