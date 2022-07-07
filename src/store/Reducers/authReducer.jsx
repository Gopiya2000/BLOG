const initialState = {
    login : false,
    signup : false,
    user : {}
}

// const tokenState = {
//     token : localStorage.getItem("usersToken"),
//     name : '',
//     email : '',
//     username : '',
//     mobile : '',
//     date : '',
//     password : '',
//     confirm : '',
//     _id : ''
// }

const authReducer = (state = initialState, action) => {
    console.log("AUTH INSIDE");
    switch(action.type){
       
        case 'SET_LOGIN' :
             console.log("SetLogin",action.data);
        return {
            ...state,
            login : true,
            user:action.data
        }
        case 'SET_LOGOUT' : return {
            ...state,
            login : false
        }
        case 'SET_SIGNUP' : return {
            ...state,
            signup : true
        }
        case 'SET_SIGNOUT' : return {
            ...state,
            signup : false
        }
        case 'TOGGLE_SIGNUP' : return {
            ...state,
            signup : ! state.signup
        }
        default : return state
    }
}

// const tokenReducer = (state = tokenState, action) => {
//     switch(action.type){
//         case 'SET_TOKEN' : 
//         case 'SET_RETRIEVE_TOKEN' :
//         const user = jwtdecode(action.token)
//         console.log("after refresh : ",user)
//         return {
//             ...tokenState,
//             token : action.token,
//             name : user.name,
//             email : user.email,
//             username : user.username,
//             mobile : user.mobile,
//             password : user.password,
//             confirm : user.confirm,
//             _id : user.id
//         }
//         case 'DELETE_USER_ID' : return {
//             state
//         }
//         default : return state
//     }
// }

export default authReducer
    