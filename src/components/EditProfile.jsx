import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useStyles, chooseFile } from "../styles/styles"
import { viewProfile, updateProfile } from "../store/Actions/userActions"
import FileBase from "react-file-base64"
const EditProfile = () => {
  const classes = useStyles
  const userId = useSelector(state => state.userTokener._id)
  const profile = useSelector(state => state.profileDetails.profile)
  console.log("user from edit profile", profile)
  const { bio, image } = profile
  console.log("userconsole", profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profileCredentials, setProfileCredentials] = useState({
    bio,
    image
  })

  useEffect(() => {
    dispatch(viewProfile(profile))
  }, [dispatch])

  useEffect(() => {
    if (profile)
      setProfileCredentials({
        bio,
        image
      })
  }, [profile])

  const changeCredentialHandler = (event) => {
    setProfileCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }
    ))
  }



  const updateHandler = (event) => {
    event.preventDefault()
    dispatch(updateProfile(profileCredentials, profile._id))//user._id
    navigate('/profile')
    console.log("profileCredentials :", profileCredentials.value);
  }
  return (<>
    <form onSubmit={updateHandler}>
      <Box sx={{ maxWidth: 500, maxHeight: 200, marginLeft: 70, marginTop: 10 }}>
        <TextField type={'text'} name='bio' value={profileCredentials.bio || ""} onChange={changeCredentialHandler} placeholder='Bio' margin='normal' required />
        <div className={classes.chooseFile}>
          <Typography>Edit Profile Image</Typography>
          <br></br>
          <FileBase type={'file'} multiple={false} onDone={({ base64 }) => setProfileCredentials({ ...profileCredentials, image: base64 })} />
        </div>
        <Button type='submit' variant='contained' color='warning' style={{ margin: '9%' }}>Update</Button>
      </Box>
    </form>
  </>)
}

export default EditProfile

