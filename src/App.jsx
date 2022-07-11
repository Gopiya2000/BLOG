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
//import { store1 } from "../store1";


function App() {
  // const [blogDetails, setBlogDetails] = useState({
  //   title:'',
  //   content:'',
  //   image:'',
  //   tag:'',
  //   user:''})

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])
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
        <Route path="/blogs" element={<Home />} />
        {/* <Route path="/blogs">
          <Provider store={store1}>
          <Home />
          </Provider>
          </Route>   */}
        <Route path="/blogs/add" element={<CreateBlog />} />
        <Route path="/myBlogs" element={<MyBlog />} />
        <Route path="/addProfile" element={<AddProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/userDetails/edit" element={<EditUserDetails />} />
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
