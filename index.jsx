import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./src/App";
import {BrowserRouter} from 'react-router-dom'
import { store } from "./store";
//import {store1} from "./store1";
ReactDOM.render(
    <BrowserRouter>
    {/* <Provider store={store1}> */}
        <Provider store={store}>
    <App />
</Provider>
{/* </Provider> */}
    </BrowserRouter>

, document.getElementById("root"));