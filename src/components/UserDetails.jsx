import { Button, SnackbarContent, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React,  {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  {viewUser}  from '../store/Actions/userActions'

 const UserDetails = () => {
  
  const userId = useSelector( state => state.userTokener._id )
  console.log("userId :",userId);
  const user = useSelector( (state) => state.userDetails.user )
  console.log("user object  : ",user)
  //console.log("user details : ",user.existingUser)
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewUser(userId))
    },[userId])
    //console.log("viewuser",user.existingUser);
    return(<>
      <Box sx={{
            width: 400,
            height: 370,
            margin: 'auto',
            marginTop:'90px'
        }}>
      <Stack spacing={1}>
            <SnackbarContent message={user.name} action="NAME" sx={{backgroundColor:"#2E3B55", color:'white'}}/>
            <SnackbarContent message={user.email} action="EMAIL" sx={{backgroundColor:"#2E3B55", color:'white'}}/>
            <SnackbarContent message={user.username} action="USERNAME" sx={{backgroundColor:"#2E3B55", color:'white'}} />
            <SnackbarContent message={user.mobile} action="MOBILE" sx={{backgroundColor:"#2E3B55", color:'white'}} />
            <SnackbarContent message={user.date} action="DATE" sx={{backgroundColor:"#2E3B55", color:'white'}}/>
        </Stack>
        <Button LinkComponent={Link} to='/userDetails/edit' variant='outlined' sx={{borderRadius: 4, marginLeft: 20, marginTop: 3 }} >Edit</Button>
        </Box>
    </>)
 }

 export default UserDetails;