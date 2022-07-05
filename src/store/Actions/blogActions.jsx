import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../../api';

export const viewBlogs = async () => {
   return    await  axios.get(`${url}/api/blog/`)
   
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
     }

//add blogs
// export const addBlog = (blog) => {
//     return (dispatch, getState) => {
//         axios.post(`${url}/api/blog/add`, blog)
//             .then(blogs => {
//                 dispatch({
//                     type: "ADD_BLOG",
//                     blogs
//                 })
//             })
//             .catch(err => {
//                 console.log("error", err.message)
//             })
//     }
// }
// export const updateBlog = (updateBlog, id) => {
//     console.log("updated blog", updateBlog)
//     return (dispatch) => {
//         axios.put(`${url}/api/blog/update/${id}`, updateBlog)
//             .then(blogs => {
//                 dispatch({
//                     type: "UPDATE_BLOG",
//                     blogs
//                 })
//             })
//             .catch(err => {
//                 console.log("error", err.message)
//             })
//     }
// }

// export const deleteBlog = (id) => {
//     return (dispatch) => {
//         axios.delete(`${url}/api/blog/${id}`)
//             .then(() => {
//                 dispatch({
//                     type: "DELETE_BLOG",
//                     id
//                 })
//             })
//             .catch(err => {
//                 console.log("error", err.message)
//             })
//     }
// }