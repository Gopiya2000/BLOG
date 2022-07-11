import { Button, SnackbarContent, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React,  {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { viewProfile } from '../store/Actions/userActions'

 const Profile = () => {
  const profileId = useSelector( state => state.userTokener._id )
  console.log("profileId :",profileId);
  const profile = useSelector( (state) => state.profileDetails.profile )
  //const profileAll = profile[0];
  //console.log("profileAll : ",profileAll);
  console.log("profile object  : ",profile)
  console.log("profile object[0]  : ",profile[0])
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewProfile(profileId))
    },[profileId])
    return(<>
      <Box sx={{
            width: 400,
            height: 370,
            margin: 'auto',
            marginTop:'90px'
        }}>
      <Stack>
            <SnackbarContent message={profile.bio} action="BIO" sx={{backgroundColor:"#2E3B55", color:'white'}} />
        </Stack>
        <Button LinkComponent={Link} to='/profile/edit' variant='outlined'sx={{borderRadius: 4, marginLeft: 20, marginTop: 3 }}>Edit</Button>
        </Box>
    </>)
 }

 export default Profile;