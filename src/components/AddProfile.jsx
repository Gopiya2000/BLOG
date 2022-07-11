import React from 'react'
import { Box, TextField, Button, TextareaAutosize, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate  } from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux"
import { addProfile } from '../store/Actions/userActions'


const AddProfile = () => {
    const user = useSelector((state) => {
        console.log("state",state);
        return state.auth.user.existingUser
    })
    console.log("user",user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [profileDetails, setProfileDetails] = useState({
       bio:'',
        user:''
    })
console.log("profileDetails",profileDetails);
    const changeHandler=(event)=>{
        let newState = {[event.target.name]:event.target.value}
        setProfileDetails((prevState)=>({...prevState,...newState,
        user:user["_id"]}))
    }


     const submitHandler=(event)=>
     {
        event.preventDefault()
        console.log(profileDetails)
       dispatch(addProfile(profileDetails))
      navigate('/profile')
        }
return(
            <form onSubmit={submitHandler}>
                <Box>
                <Typography variant="h4" sx={{marginLeft:"32%",marginTop:"5%",width:"70%"}}>Blog details</Typography>
                    <TextField type="text" variant="standard" name="bio" value={profileDetails.bio} onChange={changeHandler} required label="Bio" />
                    <Button color="inherit" type="submit" >Add</Button>
                </Box>
                </form>
        )


}

export default AddProfile;















