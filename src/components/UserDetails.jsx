import { Button, SnackbarContent, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React,  {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  {viewUser}  from '../store/Actions/authActions'

 const UserDetails = () => {
  
  //const userId = useSelector( state => state.user.userId )
  const user = useSelector( (state) => state.auth.user )
  console.log("user object  : ",user)
  //console.log("user details : ",user.existingUser)
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewUser(user.existingUser._id))
    },[])
    //console.log("viewuser",user.existingUser);
    return(<>
      My details Page
      <Box sx={{
            width: 400,
            height: 370,
            margin: 'auto',
            marginTop:'90px'
        }}>
      <Stack spacing={1} sx={{ maxWidth: 600 }}>
            <SnackbarContent message={user.existingUser.name} action="Name" />
            <SnackbarContent message={user.existingUser.email} action="Email"/>
            <SnackbarContent message={user.existingUser.username} action="Username" />
            <SnackbarContent message={user.existingUser.mobile} action="Mobile" />
            <SnackbarContent message={user.existingUser.date} action="Date" />
            <SnackbarContent message={user.existingUser.password} action="Password" />
            <SnackbarContent message={user.existingUser.confirm} action="Confirm" />
        </Stack>
        <Button LinkComponent={Link} to='/userDetails/edit' variant='outlined' sx={{ margin: 1, borderRadius: 3, marginLeft: 20, marginTop: 3 }} color='warning'>Edit</Button>
        </Box>
    </>)
 }

 export default UserDetails;