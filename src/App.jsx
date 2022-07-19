import Header from "./components/Header";
import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import MyBlog from "./components/MyBlog";
import Profile from "./components/Profile";
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

function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(retrieveUserToken())
	}, [dispatch])

	const login = useSelector(state => state.login);

	return (
		<>
			<React.Fragment >
				<header>
					<Header />
				</header>
				<main >
					<Routes>
						<Route path="/auth" element={<Auth />} />
						<Route path="/blogs" element={<Protected><Home /></Protected>} />
						<Route path="/blogs/add" element={<Protected><CreateBlog /></Protected>} />
						<Route path="/blogs/edit" element={<Protected><EditBlog /></Protected>} />
						<Route path="/my-blogs" element={<Protected><MyBlog /></Protected>} />
						<Route path="/this-blog" element={<Protected><Blog /></Protected>} />
						<Route path="/add-profile" element={<Protected><AddProfile /></Protected>} />
						<Route path="/profile" element={<Protected><Profile /></Protected>} />
						<Route path="/profile/edit" element={<Protected><EditProfile /></Protected>} />
						<Route path="/user-details" element={<Protected><UserDetails /></Protected>} />
						<Route path="/user-details/edit" element={<Protected><EditUserDetails /></Protected>} />
					</Routes>
				</main>
			</React.Fragment>
		</>
	)
}


export default App;
