import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card, Button, ButtonGroup } from '@mui/material'
import React from 'react';
import { updateBlog, viewUserBlog, viewSingleBlog } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../store/Actions/blogActions';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const MyBlog = () => {
  const userId = useSelector(state => state.userTokener._id)
  const blog = useSelector((state) => state.blog.blog)
  console.log("blogs :", blog)


  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(viewUserBlog(userId))
  }, [])

  return (
    <>
      {blog && blog.map((blog, index) => {
        console.log("CARD INSIDE", blog, index);
        return (
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
          </Card>

        )
      }
      )
      }
    </>
  )
}

export default MyBlog;






