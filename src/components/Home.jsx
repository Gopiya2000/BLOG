import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card,Button,ButtonGroup } from '@mui/material'
import React from 'react';
import { viewBlogs } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';



const Home = () => {
  const blogs = useSelector((state) => state.blogs)


const dispatch =useDispatch();
const navigate = useNavigate()

useEffect(() => {
  const view = async () =>{
    const temp = await viewBlogs()
    console.log("temp ",temp);
    dispatch({
      type: "VIEW_BLOGS",
      blogs: temp.data
    
}
    )
}
view()
}
  , [])

//console.log("blogs : ",blogs)
// const addBlogHandler = () => {
//   navigate('/blogs/add')
// }

// const addBlogHandler = () =>
// {
//     navigate('/blogs/add')
// }
// const updateBlogHandler = (id) =>
// {
//   const foundBlog = blogs.find((blog) => blog._id === id);
//     setBlogDetails({ ...foundBlog });
//   navigate('/blogs/add')
//   window.scrollTo({
//     top:0,
//     left:0,
//     behavior:"smooth"
//   })
// }
// const deleteBlogHandler = (id) =>
// {
//   dispatch(deleteBlog(id))
//   navigate('/blogs')
// }



  return (
    <>
    {/* <Button onClick={() => addBlogHandler()} sx={{marginLeft : "50%", marginTop : "2%", border : "2px solid blue", backgroundColor : "white", color : "black" }} >
    <AddIcon></AddIcon> Add Blog
    </Button> */}
      {blogs && blogs.map((blog) => {
        console.log("INSIDE");
        return (
          <div>
      {/* {" "} */}
      <Card style={{ width:"40%", margin:"auto",mt: 2,padding: 2,boxShadow:"5px 5px 10px #ccc"}}>
      <CardHeader
        avatar={
          <Avatar style={{ bgcolor: "red" }} aria-label="recipe">
            {user}
          </Avatar>
        }
        title={blog.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={blog.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {blog.content}
         {blog.tag}
        </Typography>
      </CardContent>
    </Card>
    <div key={blog._id}>
    {/* <ButtonGroup>
      <Button onClick={() => updateBlogHandler(blog._id)}>
        <EditIcon color="primary" sx={{ "&:hover": { color: "green" } }} ></EditIcon>
      </Button>
      <Button>
        <DeleteIcon onClick={() => deleteBlogHandler(blog._id)} color="warning" sx={{ "&:hover": { color: "green" } }}/>
      </Button>
    </ButtonGroup> */}
</div>
</div>
        )
       }
        )
    } 
     </>
  )
}

export default Home;






