import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useStyles } from "../styles/styles"
import { viewUser,updateUser } from "../store/Actions/authActions"
// import bcrypt from 'bcrypt'
const EditUserDetails = () => {
    const classes = useStyles
    const user = useSelector( state => state.auth.user.existingUser )
    console.log("user from edit user profile",user)
    const { name,email,username,mobile,date,password,confirm } = user
    console.log("userconsole",user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // userPassword = bcrypt.
    const [userCredentials, setUserCredentials] = useState({
        name,
        email,
        username,
        mobile,
        date,
        password,
        confirm
    })

    useEffect(() => {
      dispatch(viewUser(user))
    },[dispatch])
    
    useEffect(() => {
        if(user)
        setUserCredentials({
            name,
            email,
            username,
            mobile,
            date,
            password,
            confirm
        })
    },[user])
    
    const changeCredentialHandler = (event) => {
        setUserCredentials((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value,
    }
    ))
    }


    
    const updateHandler = (event) => {
        event.preventDefault()
        dispatch(updateUser(userCredentials, user._id))//user._id
        navigate('/userDetails') 
        console.log("userCredentials :",userCredentials.value);
    }
    return(<>
    <form onSubmit={ updateHandler }>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
          My Details
          </Typography>
          <TextField type={'text'} name='name' value={userCredentials.name || ""}  onChange={changeCredentialHandler} placeholder='Name' margin='normal' required/> 
          <TextField type={'email'} name='email' value={userCredentials.email || ""} onChange={changeCredentialHandler} placeholder='Email' margin='normal' required/>
          <TextField type={'text'} name='username' value={userCredentials.username || ""} onChange={changeCredentialHandler} placeholder='Username' margin='normal' required/>
          <TextField type={'text'} name='mobile' value={userCredentials.mobile || ""}  onChange={changeCredentialHandler} placeholder='Mobile' margin='normal' required/>
          <TextField type={'text'} name='date' value={userCredentials.date || ""}  onChange={changeCredentialHandler} placeholder='Date' margin='normal' required/>
          <TextField type={'password'} name='password' value={userCredentials.password || ""}  onChange={changeCredentialHandler} placeholder='Password' margin='normal' required/>
          <TextField type={'password'} name='confirm' value={userCredentials.confirm || ""}  onChange={changeCredentialHandler} placeholder='Confirm' margin='normal' required/>
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>Update</Button>
        </Box>
      </form>
    </>)
}

export default EditUserDetails