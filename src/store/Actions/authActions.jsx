import { SET_LOGIN, SET_LOGOUT, SET_SIGNUP, SET_SIGNOUT, TOGGLE_SIGNUP } from "./authTypes"
import axios from "axios";

const setLogin = (data) => {
    console.log("setLoginaction", data);
    return {
        type: SET_LOGIN,
        data: data
    }
}
const setLogout = () => {
    return {
        type: SET_LOGOUT
    }
}
const setSignUp = () => {
    return {
        type: SET_SIGNUP
    }
}
const setSignOut = () => {
    return {
        type: SET_SIGNOUT
    }
}
const toggleSignup = () => {
    return {
        type: TOGGLE_SIGNUP
    }
}

export {
    setLogin,
    setLogout,
    setSignUp,
    setSignOut,
    toggleSignup
}