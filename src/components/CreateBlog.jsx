import React from 'react'
import { Box, TextField, Button, TextareaAutosize, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate  } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addBlog,updateBlog } from "../store/Actions/blogActions"


export const CreateBlog = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [blogDetails, setblogDetails] = useState({
        title:'',
        content:'',
        image:'',
        tag:'',
        user:''
    })

    const changeHandler=(event)=>{
        setblogDetails((prevState)=>({...prevState,[event.target.name]:event.target.value}))
    }
     const submitHandler=(event)=>
     {
        event.preventDefault()
    //     if(blogDetails._id){
    //         const id = blogDetails._id
    //         const updatedBlog = {
    //             title : blogDetails.title,
    //             content : blogDetails.content,
    //             image : blogDetails.image,
    //             tag : blogDetails.tag,
    //             user : blogDetails.user
    //         }
    //         console.log(blogDetails.titile)
    //         console.log(blogDetails.content)
    //         console.log(blogDetails.tag)
    //         dispatch(updateCamp(updatedBlog, id))
    //         navigate('/blogs')
    //     }
    //     else{
       dispatch(addBlog(blogDetails))
       navigate('/blogs')
        }
    // }
//}
return(
            <form onSubmit={submitHandler}>
                <Box>
                <Typography variant="h4" sx={{marginLeft:"32%",marginTop:"5%",width:"70%"}}>Blog details</Typography>
                    <TextField type="text" variant="standard" name="title" value={blogDetails.title} onChange={changeHandler} required label="Title" />
                    <TextField type="text" variant="standard" name="content" value={blogDetails.content} onChange={changeHandler} required label="content" />
                    {/* <TextField type="file" name="uploadedFile" value={uploadedFile} onChange={handleUploadedFile} sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
                    <label>File title:</label> */}
                    {/* <TextField type="text" variant="standard" name="image" value={blogDetails.image}  required label="Image" sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/> */}
                    <TextField type="file" name="image" accept="image/*"  onChange={changeHandler} value={blogDetails.image}/>
                    <TextField type="text" placeholder="tag" name="tag" value={blogDetails.tag}  onChange={changeHandler} required />
                    {/* <TextField type="text" variant="standard" name="user" value={blogDetails.user} onChange={changeHandler} required label="user" /> */}
                    <Button color="inherit" type="submit" >Register</Button>
                </Box>
                </form>
        )


}

























// import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card } from '@mui/material'
// import React from 'react';
// import { viewBlogs } from '../store/Actions/blogActions';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from 'react-router-dom';

// import AddIcon from '@mui/icons-material/Add';




// const CreateBlog = () => {
//   const blogs = useSelector((state) => state.blogs)
// console.log("blogs"+blogs)

// const dispatch =useDispatch();

// useEffect(() => {
//   dispatch(viewBlogs())
// }, [dispatch])

// const addBlogHandler = () => {
//   Navigate('/add')
// }




// const [uploadedFile, setUploadedFile] = useState ('');
//   const [fileTitle, setFileTitle] = useState ('');

//   function handleFormSubmittion (e) {
//     e.preventDefault ();

//     let form = document.getElementById ('form');
//     let formData = new FormData (form);

//     // do something
//     console.log("Form submitted")
//   }

//   function handleFileTitle (e) {
//     setFileTitle (e.target.value);
//   }

//   function handleUploadedFile (e) {
//     setUploadedFile (e.target.value);
//   }

//   return (
//     <>
//     <Button onClick={() => addBlogHandler()} sx={{marginLeft : "50%", marginTop : "2%", border : "2px solid blue", backgroundColor : "blue", color : "black" }} >
//     <AddIcon></AddIcon> Add camp
//     </Button>
//     Blogs
//       {blogs && blogs.map((blog) => {
//         return (
          
//           <div>
//             <form
//         encType="multipart/form-data"
//         onSubmit={handleFormSubmittion}
//         id="form"
//       >
//         <input 
//         type="text"
//         name='title'
//         value={title}
//         required
//          ></input>
//           <input 
//         type="text"
//         name='content'
//         value={content}
//         required
//          ></input>
//         <input
//           type="file"
//           name="uploadedFile"
//           value={uploadedFile}
//           onChange={handleUploadedFile}
//           required
//         />
//         <br />
//         <br />

//         <label>File title:</label><br />
//         <input
//           type="text"
//           placeholder="Enter file title"
//           name="fileTitle"
//           value={fileTitle}
//           onChange={handleFileTitle}
//           required
//         />
//         <br />
//         <br />
//         <input 
//         type="textArea"
//         name='tag'
//         value={tag}
//          ></input>

//         <button type="submit">Submit Form</button>
//       </form>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default CreateBlog;

// // import React from 'react'
// // import { Box, TextField, Button, TextareaAutosize, Typography } from "@mui/material"
// // import { useState } from "react"
// // import { useNavigate  } from "react-router-dom"
// // import { useDispatch } from "react-redux"
// // import { addBlog, updateCamp } from "../store/Actions/blogActions"

// // export const AddBlog = ({ blogDetails, setblogDetails }) => {

// //   function handleFormSubmittion (e) {
// //     e.preventDefault ();

// //     let form = document.getElementById ('form');
// //     let formData = new FormData (form);

// //     // do something
// //     console.log("Form submitted")
// //   }

// //   function handleFileTitle (e) {
// //     setFileTitle (e.target.value);
// //   }

// //   function handleUploadedFile (e) {
// //     setUploadedFile (e.target.value);
// //   }

// //     const navigate = useNavigate()
// //     const dispatch = useDispatch()
// //     const changeHandler=(event)=>{
// //         setblogDetails((prevState)=>({...prevState,[event.target.name]:event.target.value}))
// //     }
// //     const submitHandler=(event)=>
// //     {
// //         event.preventDefault()
// //         if(blogDetails._id){
// //             const id = blogDetails._id
// //             const updatedBlog = {
// //                 title : blogDetails.title,
// //                 content : blogDetails.content,
// //                 image : blogDetails.image,
// //                 tag : blogDetails.tag,
// //                 user : blogDetails.user
// //             }
// //             console.log(blogDetails.titile)
// //             console.log(blogDetails.content)
// //             console.log(blogDetails.tag)
// //             dispatch(updateCamp(updatedBlog, id))
// //             navigate('/blogs')
// //         }
// //         else{
// //         dispatch(AddBlog(blogDetails))
// //         navigate('/blogs')
// //         }
// //     }

// //     return(
// //         <form onSubmit={submitHandler}>
// //             <Box sx={{border:3,width:"50%",height:"650px",marginLeft:"25%", marginTop:"5%",borderRadius:15}}>
// //             <Typography variant="h4" sx={{marginLeft:"32%",marginTop:"5%",width:"70%"}}>Blog details</Typography>
// //                 <TextField type="text" variant="standard" name="title" value={blogDetails.title} onChange={changeHandler} required label="Title" sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
// //                 <TextField type="text" variant="standard" name="content" value={blogDetails.content} onChange={changeHandler} required label="content" sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
// //                 <TextField type="file" name="uploadedFile" value={uploadedFile} onChange={handleUploadedFile} sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
// //                 <label>File title:</label>
// //                 <TextField type="text" placeholder="tag" name="tag" value={tag} onChange={handleFileTitle} required />
// //                 <Button color="inherit" type="submit" sx={{width:"20%", marginLeft:"40%", marginTop:"10%", backgroundColor:"black", color:"green", border:3}}>Register</Button>
// //             </Box>
// //             </form>
// //     )
// // }








// import React from 'react'
// import { Box, TextField, Button, TextareaAutosize, Typography } from "@mui/material"
// import { useState } from "react"
// import { useNavigate  } from "react-router-dom"
// import { useDispatch } from "react-redux"
// //import {  updateCamp } from "../Store/Actions/action"

// export const CreateBlog = ({ blogDetails, setblogDetails }) => {

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const changeHandler=(event)=>{
//         setblogDetails((prevState)=>({...prevState,[event.target.name]:event.target.value}))
//     }
//     const submitHandler=(event)=>
//     {
//         event.preventDefault()
//         if(blogDetails._id){
//             const id = blogDetails._id
//             // const updatedBlog = {
//             //     title : blogDetails.title,
//             //     content : blogDetails.content,
//             //     image : blogDetails.image,
//             //     tag : blogDetails.tag,
//             //     user : blogDetails.user
//             // }
//             console.log(blogDetails.titile)
//             console.log(blogDetails.content)
//             console.log(blogDetails.tag)
//             dispatch(updateCamp(updatedBlog, id))
//             navigate('/blogs')
//         }
//         else{
//         dispatch(AddBlog(blogDetails))
//         navigate('/blogs')
//         }
//     }

//     return(
//         <form onSubmit={submitHandler}>
//             <Box sx={{border:3,width:"50%",height:"650px",marginLeft:"25%", marginTop:"5%",borderRadius:15}}>
//             <Typography variant="h4" sx={{marginLeft:"32%",marginTop:"5%",width:"70%"}}>Blog details</Typography>
//                 <TextField type="text" variant="standard" name="title" value={blogDetails.title} onChange={changeHandler} required label="Title" sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
//                 <TextField type="text" variant="standard" name="content" value={blogDetails.content} onChange={changeHandler} required label="content" sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
//                 <TextField type="file" name="uploadedFile" value={uploadedFile} onChange={handleUploadedFile} sx={{marginLeft:"15%",marginTop:"10%",width:"70%"}}/>
//                 <label>File title:</label>
//                 <TextField type="text" placeholder="tag" name="tag" value={tag} onChange={handleFileTitle} required />
//                 <Button color="inherit" type="submit" sx={{width:"20%", marginLeft:"40%", marginTop:"10%", backgroundColor:"black", color:"green", border:3}}>Submit</Button>
//             </Box>
//             </form>
//     )
// }

