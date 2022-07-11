import { SET_LOGIN, SET_LOGOUT, SET_SIGNUP, SET_SIGNOUT, TOGGLE_SIGNUP } from "./authTypes"
import axios from "axios";

const setLogin = (data) => {
    console.log("setLoginaction",data);
    return {
        type : SET_LOGIN,
        data:data
    }   
}
const setLogout = () => {
    return {
       type : SET_LOGOUT
    }  
}
const setSignUp = () => {
    return {
        type : SET_SIGNUP
    }
}
const setSignOut = () => {
    return {
        type : SET_SIGNOUT
    }
}
const toggleSignup = () => {
    return {
        type : TOGGLE_SIGNUP
    }
}
// const setDetails = (user) => {
//     return{
//         type : SET_DETAILS,
//         payload : user
//     }
// }
// const viewUser = (id) => {
//     console.log("received id : ",id)
//     return(dispatch) => {
//         axios.get(`http://localhost:4567/api/user/${id}`)
//         .then((user) => {
//             console.log("view user : ",user.data)
//             // dispatch(setDetails(user.data.user))
//         })
//         .catch( err => console.log(err) )
//     }
// }

// const updateUser = (userDetails,id) => {
//     console.log("authActions user details : ",userDetails)
//     console.log("id : ",id)
//     //id = id._id
//     return (dispatch) => {
//         axios.put(`http://localhost:4567/api/user/details/${id}`,userDetails)
//         .then(() => { 
//             dispatch(setDetails(userDetails))
//         })
//         .catch( err => console.log("error : ",err))
//     }
// }



// const setToken = (token) => {
//     return {
//         type : SET_TOKEN,
//         token
//     }
// }
// const setRetrieveToken = (token) => {
//     return {
//         type : SET_RETRIEVE_TOKEN,
//         token
//     }
// }
// const deleteUserId = () => {
//     return {
//         type : DELETE_USER_ID
//     }
// }
// const storeUserToken = (user, type = 'login') => {
//     return(dispatch,getState) => {
//         axios.post(`http://localhost:4567/api/user/${type}`,user)
//         .then( token => {
//             if(type === 'login')
//             {
//             localStorage.setItem("usersToken", token.data.accessToken)
//             dispatch(setToken(token.data.accessToken))
//             }
//         })
//         .catch( err => console.log(err.response.data,err.response.status))
//     }
// }
// const retrieveToken = () => {
//     return(dispatch, getState) => {
//         const token = getState().tokener.token
//         if(token){
//             dispatch(setRetrieveToken(token))
//         } 
//     }
// }
export {
    setLogin,
    setLogout,
    setSignUp,
    setSignOut,
    toggleSignup,
    //setDetails,
    // viewUser,
    // updateUser
    // storeUserToken,
    // retrieveToken,
    // deleteUserId
}