import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import { userReducer,tokenUserReducer, profileReducer } from "./userReducers";
//import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    blog : blogReducer,
    userDetails : userReducer,
    profileDetails : profileReducer,
    userTokener : tokenUserReducer
})

export default rootReducer