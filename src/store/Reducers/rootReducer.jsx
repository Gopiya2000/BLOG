import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import { userReducer,tokenUserReducer,profilesReducer } from "./userReducers";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    blog : blogReducer,
    userDetails : userReducer,
   profileDetails: profilesReducer,
    profile : profileReducer,
    userTokener : tokenUserReducer
})

export default rootReducer