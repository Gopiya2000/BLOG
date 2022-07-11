import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useStyles } from "../styles/styles"
import { viewProfile ,updateProfile} from "../store/Actions/userActions"
// import bcrypt from 'bcrypt'
const EditProfile = () => {
    const classes = useStyles
    const userId = useSelector( state => state.userTokener._id)
    const profile = useSelector( state => state.profileDetails.profile )
    console.log("user from edit profile",profile)
    const { bio } = profile
    console.log("userconsole",profile);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // userPassword = bcrypt.
    const [profileCredentials, setProfileCredentials] = useState({
        bio
    })

    useEffect(() => {
      dispatch(viewProfile(profile))
    },[dispatch])
    
    useEffect(() => {
        if(profile)
        setProfileCredentials({
            bio
        })
    },[profile])
    
    const changeCredentialHandler = (event) => {
        setProfileCredentials((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value,
    }
    ))
    }


    
    const updateHandler = (event) => {
        event.preventDefault()
        dispatch(updateProfile(profileCredentials, profile._id))//user._id
        navigate('/profile') 
        console.log("profileCredentials :",profileCredentials.value);
    }
    return(<>
    <form onSubmit={ updateHandler }>
        <Box sx={{ maxWidth: 500,maxHeight: 200 ,marginLeft:70,marginTop:10}}>
          <TextField type={'text'} name='bio' value={profileCredentials.bio || ""}  onChange={changeCredentialHandler} placeholder='Bio' margin='normal' required/> 
          <Button type='submit' variant='contained' color='warning' style={{margin : '9%'}}>Update</Button>
        </Box>
      </form>
    </>)
}

export default EditProfile


// import { Button, TextField, Typography } from "@mui/material"
// import { Box } from "@mui/system"
// import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from 'react-router-dom'
// import { useStyles } from "../styles/styles"
// import { viewProfile } from "../store/Actions/profileActions"
// // import bcrypt from 'bcrypt'
// const EditProfile = () => {
//     const classes = useStyles
//     const userId = useSelector( state => state.userTokener._id)
//     const profile = useSelector( state => state.profileDetails.profile )
//     console.log("user from edit profile",profile)
//     const { bio } = profile
//     console.log("userconsole",profile);
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     // userPassword = bcrypt.
//     const [profileCredentials, setProfileCredentials] = useState({
//         bio
//     })

//     useEffect(() => {
//       dispatch(viewProfile(profile))
//     },[dispatch])
    
//     useEffect(() => {
//         if(profile)
//         setProfileCredentials({
//             bio
//         })
//     },[profile])
    
//     const changeCredentialHandler = (event) => {
//         setProfileCredentials((prevState) => ({
//             ...prevState,
//             [event.target.name] : event.target.value,
//     }
//     ))
//     }


    
//     const updateHandler = (event) => {
//         event.preventDefault()
//         dispatch(updateProfile(profileCredentials, profile._id))//user._id
//         navigate('/profile') 
//         console.log("profileCredentials :",profileCredentials.value);
//     }
//     return(<>
//     <form onSubmit={ updateHandler }>
//         <Box sx={{ maxWidth: 500,maxHeight: 200 ,marginLeft:70,marginTop:10}}>
//           <TextField type={'text'} name='bio' value={profileCredentials.bio || ""}  onChange={changeCredentialHandler} placeholder='Bio' margin='normal' required/> 
//           <Button type='submit' variant='contained' color='warning' style={{margin : '9%'}}>Update</Button>
//         </Box>
//       </form>
//     </>)
// }

// export default EditProfile