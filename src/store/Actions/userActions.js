// import { SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_DETAILS } from "./actionTypes"
// import axios from "axios"

// const setUserToken = (token) => {
//     return {
//         type : SET_USER_TOKEN,
//         token
//     }
// }
// const setUserRetrieveToken = (token) => {
//     return {
//         type : SET_USER_RETRIEVE_TOKEN,
//         token
//     }
// }
// const deleteUserToken = () => {
//     return {
//         type : DELETE_USER_TOKEN
//     }
// }
// const setDetails = (user) => {
//     return{
//         type : SET_DETAILS,
//         payload : user
//     }
// }
// const storeUserToken = (user, type = 'login') => {
//     console.log("store user token : ",user)
//     return(dispatch) => {
//         axios.post(`http://localhost:3040/users/${type}`,user)
//         .then( token => {
//             if(type === 'login')
//             {
//             localStorage.setItem("usersToken", token.data.accessToken)
//             dispatch(setUserToken(token.data.accessToken))
//             }
//         })
//         .catch( err => console.log(err.response.data,err.response.status))
//     }
// }
// const retrieveUserToken = () => {
    
//     return(dispatch, getState) => {
//         const token = getState().userTokener.userToken
//         console.log("retrive user token : ",token)
//         if(token){
//             dispatch(setUserRetrieveToken(token))
//         } 
//     }
// }
// const viewUser = (id) => {
//     console.log("received id : ",id)
//     return(dispatch) => {
//         axios.get(`http://localhost:4567/api/user/${id}`)
//         .then((user) => {
//             console.log("view user : ",user.data.user)
//             dispatch(setDetails(user.data.user))
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

// export {
//     storeUserToken,
//     retrieveUserToken,
//     deleteUserToken,
//     viewUser,
//     updateUser
// }