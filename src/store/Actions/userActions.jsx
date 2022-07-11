import { SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_DETAILS,SET_PROFILE } from "./authTypes"
import axios from "axios"

const setUserToken = (token) => {
    return {
        type : SET_USER_TOKEN,
        token
    }
}
const setUserRetrieveToken = (token) => {
    return {
        type : SET_USER_RETRIEVE_TOKEN,
        token
    }
}
const deleteUserToken = () => {
    return {
        type : DELETE_USER_TOKEN
    }
}
const setDetails = (user) => {
    return{
        type : SET_DETAILS,
        payload : user
    }
}
const setProfile = (profile) => {
    return{
        type : SET_PROFILE,
        payload : profile
    }
}

const storeUserToken = (user, type = 'login') => {
    console.log("store user token : ",user)
    return(dispatch) => {
        axios.post(`http://localhost:4567/api/user/${type}`,user)
        .then( token => {
            if(type === 'login')
            {
                console.log("token is ",token.data.token)
                console.log("entered local storage")
            localStorage.setItem("usersToken", token.data.token)
            dispatch(setUserToken(token.data.token))
            }
        })
        .catch( err => console.log(err.response))
    }
}
const retrieveUserToken = () => {
    
    return(dispatch, getState) => {
        const token = getState().userTokener.userToken
        console.log("retrive user token : ",token)
        if(token){
            dispatch(setUserRetrieveToken(token))
        } 
    }
}
const viewUser = (id) => {
    console.log("received id : ",id)
    return(dispatch) => {
        axios.get(`http://localhost:4567/api/user/${id}`)
        .then((user) => {
            console.log("view user : ",user.data.user)
            dispatch(setDetails(user.data.user))
        })
        .catch( err => console.log(err) )
    }
}

const updateUser = (userDetails,id) => {
    console.log("authActions user details : ",userDetails)
    console.log("id : ",id)
    //id = id._id
    return (dispatch) => {
        axios.put(`http://localhost:4567/api/user/details/${id}`,userDetails)
        .then(() => { 
            dispatch(setDetails(userDetails))
        })
        .catch( err => console.log("error : ",err))
    }
}
const viewProfile = (id) => {
    console.log("received id : ",id)
    return(dispatch) => {
        axios.get(`http://localhost:4567/api/profile/?user=${id}`)
        .then((profile) => {
            dispatch(setProfile(profile.data[0]))
            console.log("profile.data : ",profile.data[0]);
        })
        .catch( err => console.log(err) )
    }
}

const updateProfile = (profileDetails,id) => {
    console.log("authActions profile details : ",profileDetails)
    console.log("id : ",id)
    //id = id._id
    return (dispatch) => {
        axios.put(`http://localhost:4567/api/profile/updateProfile/${id}`,profileDetails)
        .then(() => { 
            dispatch(setDetails(profileDetails))
        })
        .catch( err => console.log("error : ",err))
    }
}

export {
    storeUserToken,
    retrieveUserToken,
    deleteUserToken,
    viewUser,
    viewProfile,
    updateUser,
    updateProfile
}