import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
//import { userReducer } from "./userReducers";

const rootReducer = combineReducers({
    auth : authReducer,
    blog : blogReducer,
    //user : userReducer
})

export default rootReducer