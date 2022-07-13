import { Button, TextField, Typography ,InputLabel} from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useStyles ,labelStyles} from "../styles/styles"
import { viewSingleBlog } from "../store/Actions/blogActions"
import {  viewBlogs } from "../store/Actions/blogActions"
import {updateBlog} from "../store/Actions/blogActions"
const EditBlog = () => {
    const classes = useStyles
    //const userId = useSelector( state => state.userTokener._id)
    const blog = useSelector( state => state.singleBlog )
    console.log("user from edit blog",blog[0].blog._id)
    const { title,content,tag } = blog[0].blog
    console.log("userconsole",title);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // userPassword = bcrypt.
    const [blogCredentials, setblogCredentials] = useState({
        title,
        content,
        //image,
        tag
    })

    useEffect(() => {
      dispatch(viewSingleBlog(blog[0].blog._id))
    },[dispatch])
    console.log("blog.blog :",blog[0].blog);
    useEffect(() => {
        if(blog)
        setblogCredentials({
            title,
            content,
            tag
        })
    },[blog]
    )
    
    const changeCredentialHandler = (event) => {
        setblogCredentials((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value,
    }
    ))
    }


    
    const updateHandler = (event) => {
        event.preventDefault()
        console.log("dispatch update");
        dispatch(updateBlog(blogCredentials,blog[0].blog._id))
        console.log("blog_id : ",blog[0].blog._id);//user._id
        navigate('/blogs') 
        console.log("blogCredentials :",blogCredentials.value);
    }
    return(
    <>
    <form onSubmit={ updateHandler }>
        {console.log("FORM")}
        <Box border={3} borderColor="#2E3B55" borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={3} display='flex' flexDirection={'column'} width={"80%"} >
        <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Title</InputLabel>
        <br></br>
        <TextField type={'text'} name='title' value={blogCredentials.title || ""}  onChange={changeCredentialHandler} placeholder='Title' margin='normal' required/> 
        <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Content</InputLabel>
        <br></br>
        <TextField type={'text'} name='content' value={blogCredentials.content || ""}  onChange={changeCredentialHandler} placeholder='Content' margin='normal' required/> 
        {/* <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Image</InputLabel>
         <br></br><TextField type={'text'} name='image' value={blogCredentials.image || ""}  onChange={changeCredentialHandler} placeholder='Image' margin='normal' required/>  */}
        <InputLabel margin='auto' variant='outlined' className={classes.labelStyles}>Tag</InputLabel>
         <br></br>
          <TextField type={'text'} name='tag' value={blogCredentials.tag || ""}  onChange={changeCredentialHandler} placeholder='Tag' margin='normal' required/> 
          <Button type='submit' variant='contained' color='warning' style={{margin : '9%'}}>Update</Button>
        </Box>
      </form>
    </>
    )
}

export default EditBlog