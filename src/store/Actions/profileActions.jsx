// import  {SET_PROFILE} from "./authTypes";
// import axios from "axios"

// const setProfile = (profile) => {
//     return{
//         type : SET_PROFILE,
//         payload : profile
//     }
// }

// const viewProfile = (user) => {
//     console.log("received id : ",user)
//     return(dispatch) => {
//         axios.get(`http://localhost:4567/api/profile/`)
//         .then((profile) => {
//             console.log("view profile : ",profile.data)
//             dispatch(setProfile(profile.data))
//             console.log("profile.data.profile :",profile.data);
//         })
//         .catch( err => console.log(err) )
//     }
// }

// export {

//     viewProfile
// }