import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card, Button, ButtonGroup } from '@mui/material'
import React from 'react';
import { viewBlogs } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';



const Home = () => {

  const blogs = useSelector((state) => state.blog.blogs)
  console.log(blogs)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //console.log("blogs:",blogs);

  useEffect(() => {
    const view = async () => {
      const all = await viewBlogs()
      console.log("all ", all);
      dispatch({
        type: "VIEW_BLOGS",
        blogs: all.data

      }
      )
    }
    view()
  }
    , [])

  //console.log("blogs : ",blogs)
  const addBlogHandler = () => {
    navigate('/blogs/add')
  }

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
      <Button onClick={() => addBlogHandler()} sx={{ marginLeft: "50%", marginTop: "2%", border: "2px solid blue", backgroundColor: "white", color: "black" }} >
        <AddIcon></AddIcon> Add Blog
      </Button>
      {blogs && blogs.map((blog, index) => {
        console.log("CARD INSIDE");
        return (
          <div key={index}>
            {/* {" "} */}
            <Card style={{ width: "40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc" }}>
              <CardHeader
                avatar={
                  <Avatar style={{ bgcolor: "red" }} aria-label="recipe">
                    {blog.user}
                  </Avatar>
                }
                title={blog.title}
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                // accept="image/*" //jpg,jpeg,png,webp
                // image='/src/images/image1.png'
                image={blog.image}
              // alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
                {blog.tag && blog.tag.map((tag) => {
                 return (<><Typography display="inline-block" variant="body2" color="text.secondary">
                 #{tag}
               </Typography></>)
                })}
                {/* {blog.tag.map(value)=>(<p></p>)} */}

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






