import React, { useState, useEffect } from 'react';
import { Link,Navigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { authActions } from '../store';
import { AppBar, Box, Button, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { useStyles, appBar, loginTabs, loginBox, logoutButton, signupButton, LoginButton } from '../styles/styles'
import { setLogout, setSignOut, setSignUp } from '../store/Actions/authActions';
import { viewUser } from '../store/Actions/userActions';
import { deleteUserToken } from '../store/Actions/userActions';

const Header = () => {
    const location = useLocation()
    const userId = useSelector( state => state.userTokener._id )
    const classes = useStyles()
    const dispatch = useDispatch();
    // const user = useSelector( state => { console.log(state)
    //     return state.tokener})
    // console.log("user id : ",user._id)
    const login = useSelector(state => state.auth.login);
    const [selectTab, setSelectTab] = useState(0)
    const logoutHandler = () => {
        dispatch(deleteUserToken())
        Navigate('/auth')

    }
    const signupHandler = () => {
        dispatch(setSignUp())
    }
    const loginHandler = () => {
        dispatch(setSignOut())
        Navigate('/blogs')
    }
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === '/blogs') {
            setSelectTab(0)
        }
        else if (location.pathname === "/blogs/add") {
            setSelectTab(1)
        }
        else if (location.pathname === "/myBlogs") {
            setSelectTab(2)
        }
        else if (location.pathname === "/profile/:id") {
            setSelectTab(3)
        }
        else if (location.pathname === "/followers/:id") {
            setSelectTab(4)
        }
       
    }, [login])
    useEffect(() => {
        dispatch(viewUser())
        console.log(login)
    },[dispatch,login])
    return <AppBar position="sticky" style={appBar}>

        <Toolbar>
            
            <Typography variant='h4'>Blog App</Typography>
            {userId && <><Box className={classes.loginForm}>
                <Tabs value={selectTab} textColor= 'inherit' onChange={(e, value) => setSelectTab(value)}>
                    <Tab LinkComponent={Link} to="/blogs" label="Home" />
                    {/* <Tab LinkComponent={Link} to="/blogs/add" label="Create Blog" /> */}
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blog" />
                    {/* <Tab LinkComponent={Link} to="/addProfile" label="Add Profile" /> */}
                    <Tab LinkComponent={Link} to="/profile" label="Profile" />
                    <Tab LinkComponent={Link} to="/userDetails" label="My Details" />
                    {/* <Tab LinkComponent={Link} to="/userDetails/edit" label="Edit Details" /> */}
                    {/* <Tab LinkComponent={Link} to="/followers/:id" label="My Followers" /> */}
                </Tabs>
            </Box></>}
            <Box style={loginBox}>
                {!userId && <>
                    <Button onClick={loginHandler} LinkComponent={Link} to="/auth" variant='contained' style={LoginButton}>Login</Button>
                    <Button onClick={signupHandler} LinkComponent={Link} to="/auth" variant='contained' style={signupButton}>Signup</Button></>}
                {userId && (
                    <Button
                    onClick={logoutHandler}
                        LinkComponent={Link}
                        to="/auth"
                        variant='contained'
                        style={logoutButton}
                    >
                        Logout
                    </Button>
                )}
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header;