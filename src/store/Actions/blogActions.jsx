import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../../api';
import { VIEW_SINGLE_BLOG,UPDATE_BLOG,DELETE_BLOG, SET_BLOG,VIEW_USER_BLOGS } from './authTypes';

export const setViewSingleBlogs = (blog) => {
    return{
        type : VIEW_SINGLE_BLOG,
        payload : blog
    }
}

export const setEditSingleBlog = (blog) => {
    return{
        type : UPDATE_BLOG,
        payload : blog
    }
}

export const setDeleteSingleBlog = (id) => {
    return{
        type:DELETE_BLOG,
        payload : id
    }
}
export const setBlogByUser = (blogs) => {
    return{
        type : VIEW_USER_BLOGS,
        payload : blogs
    }
}


export const viewBlogs = async () => {
   return    await  axios.get(`${url}/api/blog/`)
}

//    export const viewBlogsById = async (id) => {
//     return   await  axios.get(`${url}/api/blog/${id}`)
//    }

   
    //         .then(blogs => {
    //             console.log("Blog : ", blogs)
    //             // for (const key in object) {
    //             //     const element = object[key];
    //             //     console.log("Element : " + element)
    //             // }
    //             dispatch({
    //                 type: "VIEW_BLOGS",
    //                 blogs: blogs.data
    //                 //JSON.stringify(blogs)
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //         })
    

//add blogs
export const addBlog = (blog) => {
  // console.log("bll",blog)
   blog.tag=blog.tag.split(',');
   console.log("blogs",blog);
   
    return (dispatch, getState) => {
      
        axios.post(`${url}/api/blog/add`, blog)
            .then(blogs => {
               
            //     dispatch({
            //         type: "ADD_BLOG",
            //         blogs
            //     })
            }
            )
            .catch(err => {
                console.log("error", err.message)
            })
    }
}



export const viewSingleBlog = (id) =>{
    console.log("get blog by id", id)
    return (dispatch) => {
        axios.get(`${url}/api/blog/single/${id}`)
            .then(blog => {
                console.log("view single blog is ",blog.data)
                dispatch({
                    type: "VIEW_SINGLE_BLOG",
                    blog: blog.data
                })
            })
            .catch(err => {
                console.log("error", err.message)
            })
    }
}
export const updateBlog = (updateCredentials,id) => {
    console.log("updated blog", id)
    return (dispatch) => {
        axios.put(`${url}/api/blog/update/${id}`,updateCredentials)
            .then(blog => {
                dispatch({
                    type: "UPDATE_BLOG",
                    blog : blog.data
                })
                console.log("Update blog-blog :",blog);
            })
            .catch(err => {
                console.log("error", err.message)
            })
    }
}

export const deleteBlog = (id) => {
    console.log("delete blog", id)
    return () => {
        axios.delete(`${url}/api/blog/${id}`)
    }
}

export const viewUserBlog = (id) => {
    return(dispatch) => {
          axios.get(`${url}/api/blog/${id}`)
         .then(blog => {
        dispatch(setBlogByUser(blog.data));
        console.log("blog.data : ", blog.data);
    }) 
    .catch (err => {
        return console.log(err);
    })
}
}

