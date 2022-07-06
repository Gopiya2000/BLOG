import { Button, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
//import { authActions } from '../store';
//import { useNavigate } from 'react-router';
import {useStyles,fieldTypography,authSubmit,changeButton} from '../styles/styles';
import { setLogin, setSignOut, toggleSignup ,storeUserToken} from '../store/Actions/authActions';

const Auth = () => {
  const classes = useStyles()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = useSelector( state => state.auth.signup )
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    date: "",
    password: "",
    confirm: ""
  })
  // const [signup, setsignup] = useState(false)
  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }))
  // }
  //const { name,email,username,mobile,date,password,confirm} = Inputs;
  const sendRequest = async (type="login") => {
    console.log("signup")
    const res = await axios.post(`http://localhost:4567/api/user/${type}`, {
      name: Inputs.name,
      email: Inputs.email,
      username: Inputs.username,
      mobile: Inputs.mobile,
      date: Inputs.date,
      password: Inputs.password,
      confirm: Inputs.confirm
    }
    ).catch((err) => console.log(err));
    const data = await res.data;
    console.log("data : ",data)
    return data;
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  const signupHandler = () => {
    dispatch(toggleSignup())
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Inputs);
    if(signup){
      sendRequest("signup")
      .then(()=>{console.log("ho")
        dispatch(setSignOut())})
      .then(data => console.log(data))
      navigate("/auth")
    }
    else{
      sendRequest()
      .then(()=>dispatch(setLogin()))
      .then(data => console.log(data))
      navigate("/blogs")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box className={classes.submitForm} >
          <Typography variant='h4'style={fieldTypography}>
            {signup ? "Signup" : "Login"}
          </Typography>
          {signup && <TextField name='name' onChange={handleChange} value={Inputs.name} placeholder='name' margin='normal' required />}
          {signup && <TextField name='email' onChange={handleChange} value={Inputs.email} type={"email"} placeholder='email' margin='normal' required />}
          <TextField name='username' onChange={handleChange} value={Inputs.username} placeholder='username' margin='normal' required />
          {signup && <TextField name='mobile' onChange={handleChange} value={Inputs.mobile} placeholder='mobile' margin='normal' required />}
          {signup && <TextField name='date' onChange={handleChange} value={Inputs.date} placeholder='date' margin='normal' required />}
          <TextField name='password' onChange={handleChange} value={Inputs.password} type={'password'} placeholder='password' margin='normal' required />
          {signup && <TextField name='confirm' onChange={handleChange} value={Inputs.confirm} type={'password'} placeholder='confirm password' margin='normal' required />}
          <Button type='submit' variant='contained'style={authSubmit}>{ signup ? "Signup" : "Login"}</Button>
          {/* <Button onClick={() => setsignup(!signup)}style={changeButton}> </Button> */}
          { !signup && <Typography>Don't have an account ?</Typography> }
          <Link onClick={signupHandler} to='/auth'>{ !signup && "Signup"}</Link>
        </Box>
      </form>
    </div>
  )
}

export default Auth;

//name, email, username, mobile, date, password, confirm