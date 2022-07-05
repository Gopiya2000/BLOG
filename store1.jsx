import { createStore ,applyMiddleware} from "@reduxjs/toolkit"
import blogReducer from "./src/store/Reducers/blogReducer"
import thunk from "redux-thunk"

export const store1 = createStore(blogReducer,applyMiddleware(thunk));
