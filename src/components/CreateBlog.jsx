import React from 'react'
import { Box, TextField, Button, TextareaAutosize, Typography, InputLabel } from "@mui/material"
import { useState } from "react"
import { useStyles,labelStyles,chooseFile } from '../styles/styles'
import { useNavigate  } from "react-router-dom"
import FileBase from "react-file-base64"
import { useDispatch ,useSelector} from "react-redux"
import { addBlog,updateBlog } from "../store/Actions/blogActions"


export const CreateBlog = () => {
    const classes = useStyles()
    const user = useSelector((state) => {
        console.log("state",state);
        return state.auth.user.existingUser
    })
    console.log("user",user)
    // const[image,setImage]=useState("/blogimg.png")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [blogDetails, setblogDetails] = useState({
        title:'',
        content:'',
        image:'',
        tag:'',
        user:''
    })
console.log("blogdetails",blogDetails);
    const changeHandler=(event)=>{
        let newState = {[event.target.name]:event.target.value}
        setblogDetails((prevState)=>({...prevState,...newState,
        user:user["_id"]}))
    }

     const submitHandler=(event)=>
     {
        event.preventDefault()
        console.log("blogDetails submit handler",blogDetails)
       dispatch(addBlog(blogDetails))
       navigate('/blogs')
        }
return(
            <form onSubmit={submitHandler}>
                <Box border={3} borderColor="#2E3B55" borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={3} display='flex' flexDirection={'column'} width={"80%"} >
                <Typography variant="h4" sx={{marginLeft:"32%",marginTop:"5%",width:"70%"}}>Blog details</Typography>
                <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Title</InputLabel>
                <br></br>
                    <TextField type="text" variant="standard" name="title" value={blogDetails.title} onChange={changeHandler} required />
                    <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Content</InputLabel>
                    <br></br>
                    <TextField type="text" variant="standard" name="content" value={blogDetails.content} onChange={changeHandler} required />
                    <div className={classes.chooseFile}>
          <Typography>  Create Blog Image</Typography>
          <FileBase type="file" multiple={false} onDone={({ base64 }) =>   setblogDetails({ ...blogDetails, image: base64 })} />
        </div>
                    <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Tag</InputLabel>
                    <br></br>
                    <TextField type="text" variant='outlined' name="tag" value={blogDetails.tag}  onChange={changeHandler} required />
                    <Button sx={{mt:2,borderRadius:4}} variant='contained' color='warning' type="submit" onClick={submitHandler}>Add</Button>
                </Box>
                </form>
        )


}