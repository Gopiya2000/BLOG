const initialState = {
    login: false,
    signup: false,
    user: ''
}
const authReducer = (state = initialState, action) => {
    console.log("AUTH INSIDE");
    switch (action.type) {

        case 'SET_LOGIN':
            console.log("SetLogin", action.data);
            return {
                ...state,
                login: true,
                user: action.data
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                login: false
            }
        case 'SET_SIGNUP': return {
            ...state,
            signup: true
        }
        case 'SET_SIGNOUT': return {
            ...state,
            signup: false
        }
        case 'TOGGLE_SIGNUP': return {
            ...state,
            signup: !state.signup
        }
        default: return state
    }
}


export default authReducer
