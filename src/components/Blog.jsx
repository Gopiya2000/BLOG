import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card, Button, ButtonGroup } from '@mui/material'
import React from 'react';
import { updateBlog, viewSingleBlog } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../store/Actions/blogActions';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Blog = () => {
    
  // const userId = useSelector( state => state.userTokener._id )
  // console.log("userId :",userId);
  // const profile = useSelector( (state) => state.profileDetails.profile)
  // //const profileAll = profile[0];
  // //console.log("profileAll : ",profileAll);
  // console.log("profile object  : ",profile)
  // console.log("profile object[0]  : ",profile)
  // const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(viewProfile(userId))
  //   },[userId])

// const blogId = useSelector( state => state.blogDetails.blog._id )
// console.log("BlogId :",blogId);
const blogs = useSelector((state) => state.singleBlog)
  console.log("blogs :",blogs)  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(viewSingleBlog())
  // },[])
 
  // useEffect(() => {
  //   const view = async () => {
  //     const single = viewSingleBlog()
  //     console.log("single ", single);
  //     dispatch({
  //       type: "VIEW_SINGLE_BLOG",
  //       blog: single.data,

  //     }
  //     )
  //   }
  //   view()
  // }
  //   , [])
  const updateBlogHandler = () =>
  {
    navigate('/blogs/edit')
  }
  const deleteBlogHandler = (id) =>
  {
    dispatch(deleteBlog(id))
    navigate('/blogs')
  }
  return (
     <>
      {blogs && blogs.map((blogs, index) => {
        console.log("CARD INSIDE",blogs,index);
        return (
          <div key={index}>
            {/* {" "} */}
            <Card style={{ width: "40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc" }}>
              <CardHeader
                title={blogs.blog.title}
              />

              <CardMedia
                component="img"
                height="194"
                image={blogs.blog.image}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {blogs.blog.content}
                </Typography>
                {blogs.blog.tag && blogs.blog.tag.map((tag) => {
                 return (<><Typography display="inline-block" variant="body2" color="text.secondary">
                 #{tag}
               </Typography></>)
                })}
              </CardContent>
            <ButtonGroup>
              <div key={blogs.blog._id}>
                {console.log("blog._id",blogs.blog._id)}
      <Button onClick={() => updateBlogHandler(blogs.blog._id)}>
        <EditIcon color="primary" sx={{ "&:hover": { color: "green" } }} ></EditIcon>
      </Button>
      <Button>
        <DeleteIcon onClick={() => deleteBlogHandler(blogs.blog._id)} color="warning" sx={{ "&:hover": { color: "green" } }}/>
      </Button>
      </div>
    </ButtonGroup>
           
            </Card>

          </div>
        )
      }
      )
      } 
    </>
  )
}

export default Blog;






