import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card, Button, ButtonGroup } from '@mui/material'
import React from 'react';
import { viewBlogs } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import PinchIcon from '@mui/icons-material/Pinch';
import { viewSingleBlog } from '../store/Actions/blogActions';



const Home = () => {

  const blogs = useSelector((state) => state.blog.blogs)
  console.log("Home blogs :", blogs)
  const profile = useSelector((state) => state.profileDetails)
  console.log("profile : ", profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const addBlogHandler = () => {
    navigate('/blogs/add')
  }
  const viewSingleBlogHandler = (id) => {
    dispatch(viewSingleBlog(id))
    navigate('/thisBlog')
  }


  return (
    <>
      <Button>
        <AddIcon onClick={() => addBlogHandler()} color="primary"  ></AddIcon>
      </Button>
      {blogs && blogs.map((blog, index) => {
        console.log("CARD INSIDE", blog, index);
        return (
          <div key={index}>
            <Card style={{ width: "40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc" }}>
              <CardHeader
                title={blog.title}
              />

              <CardMedia
                component="img"
                height="194"
                image={blog.image}
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
              </CardContent>
              <div key={blog._id}>
                {console.log("blog._id", blog._id)}
                <ButtonGroup>
                  <Button onClick={() => viewSingleBlogHandler(blog._id)}>
                    <PinchIcon color="primary" sx={{ "&:hover": { color: "green" } }} ></PinchIcon>
                  </Button>
                </ButtonGroup>
              </div>
            </Card>

          </div>
        )
      }
      )
      }
    </>
  )
}

export default Home;






