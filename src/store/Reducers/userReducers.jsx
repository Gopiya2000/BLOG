
import jwtdecode from 'jwt-decode';

const initialState = {
    user : '' ,
    profile : '',
    blog : ''
}
const tokenState = {
    userToken : localStorage.getItem("usersToken"),
    _id : ''
}

const userReducer = (state = initialState, action) => {
    console.log(" auth type : ",action.type)
    switch(action.type){
        case 'SET_DETAILS' : return {
            ...state,
            user : action.payload
        }
        default : return state
    }
}
const profilesReducer = (state = initialState,action) => {
    console.log(" auth type : ",action.type)
    switch(action.type){
        case 'SET_PROFILE' : return {
            ...state,
            profile : action.payload
        }
        default : return state
    }
}

const tokenUserReducer = (state = tokenState, action) => {
    console.log("token user type : ",action.type)
    switch(action.type){
        case 'SET_USER_TOKEN' : 
        case 'SET_USER_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        console.log("id from userReducer:",user)
        return {
            ...tokenState,
            userToken : action.token,
            _id : user.id
        }
        case 'DELETE_USER_TOKEN' : localStorage.removeItem("usersToken")
        return {
            userToken : '',
            _id : ''
        }
        default : return state
    }
}


export {
    userReducer,
    profilesReducer,
    tokenUserReducer,
    //BlogReducer
}