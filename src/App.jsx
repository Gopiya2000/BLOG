import Header from "./components/Header";
import React from "react";
import { useState, useEffect } from 'react';
import { Routes,Route } from "react-router-dom";
import Auth from "./components/Auth";
import MyBlog from "./components/MyBlog";
import Profile from "./components/Profile";
//import AddBlog from "./components/CreateBlog";
import Followers from "./components/Followers";
import { Provider, useSelector } from "react-redux";
import Home from "./components/Home";
import { CreateBlog } from "./components/CreateBlog";
import UserDetails from "./components/UserDetails"
import EditUserDetails from "./components/EditUserDetails"
import EditProfile from "./components/EditProfile";
import AddProfile from "./components/AddProfile"
import { useDispatch } from 'react-redux';
import EditBlog from "./components/EditBlog";
import { retrieveUserToken } from "./store/Actions/userActions";
import Blog from "./components/Blog";
import Protected from "./Protected";
//import { store1 } from "../store1";


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(retrieveUserToken())
  }, [dispatch])
  const login = useSelector(state => state.login);
  console.log(login);

  return (
    <>
   {
     <React.Fragment >
    
    <header>
      <Header/>
    </header>
    <main >
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Protected><Home /></Protected>} />
        {/* <Route path="/blogs">
          <Provider store={store1}>
          <Home />
          </Provider>
          </Route>   */}
        <Route path="/blogs/add" element={<Protected><CreateBlog /></Protected>} />
        <Route path="/blogs/edit" element={<Protected><EditBlog /></Protected>} />
        <Route path="/myBlogs" element={<Protected><MyBlog /></Protected>} />
        <Route path="/thisBlog" element={<Protected><Blog /></Protected>} />
        <Route path="/addProfile" element={<Protected><AddProfile /></Protected>} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path="/profile/edit" element={<Protected><EditProfile /></Protected>} />
        <Route path="/userDetails" element={<Protected><UserDetails /></Protected>} />
        <Route path="/userDetails/edit" element={<Protected><EditUserDetails /></Protected>} />
        {/* <Route path="/followers/:id" element={<Followers />} /> */}
      </Routes>
    </main>
    {/* </Provider> */}
  </React.Fragment>
}
 </>
   )
}


export default App;
