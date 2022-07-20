import { CardContent, Typography, CardMedia, Avatar, CardHeader, Stack, Card, Button, ButtonGroup, SnackbarContent, Grid, Box } from '@mui/material'
import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { viewUser, viewProfile, viewAllUser } from '../store/Actions/userActions'
import { blogHome } from '../styles/styles';
import { viewBlogs } from '../store/Actions/blogActions';
import { getAllProfile } from '../store/Actions/profileActions';

const Home = () => {

	const user = useSelector((state) => state.userDetails.user.users)
	const userId = useSelector(state => state.userTokener._id)
	const profileBio = useSelector((state) => state.profile)
	 console.log("user :", profileBio);
	const blogs = useSelector((state) => state.blog.blogs)
	if(blogs)
	blogs.map(blog => console.log("data : ",blog.user))

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const view = async () => {
			const all = await viewBlogs()
			console.log("all ", all.data);
			dispatch({
				type: "VIEW_BLOGS",
				blogs: all.data

			}
			)
		}
		view()
	}
		, [])

	useEffect(() => {
		dispatch(viewAllUser())
	}, [])

	useEffect(() => {
		dispatch(getAllProfile())
	}, [])

	

	return (
		<>

               <Grid container>
								<Grid item xs={6}>
					{blogs && blogs.map((blog, index) => {
						if(blog.user._id !== userId){
						return (
							<Box style={blogHome}>
								<div key={index}>
									<Card style={{ width: "70%", margin: "auto", mt: 2, boxShadow: "1px 2px 40px 6px #ccc" }}>
										<Typography style={{ marginLeft:10,marginTop:10}}>
											{blog.user.username}
										</Typography>
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
												return (<p style={{ display: "inline" }}><Typography display="inline-block" variant="body2" color="text.secondary">
													{`#${tag}`}
												</Typography>{" "}</p>)
											})}
										</CardContent>
										<div key={blog._id}>
											{console.log("blog._id", blog._id)}
										</div>
									</Card>
									<br></br>

								</div>
							</Box>
						)
										}
									})}
				    </Grid>
					<Grid item xs={6}>
                    {blogs && blogs.map((blog, index) => {
					if(blog.user._id !== userId){
						return (
					(<Box key={blog._id}>
						<Stack sx={{ maxWidth: 6, marginTop: 10, marginLeft: 10 }}>
							<SnackbarContent action={blog.user.username} message="NAME" sx={{ backgroundColor: "#2E3B55", color: 'white' }} />
						</Stack>
						<br></br>
						<Stack sx={{ maxWidth: 6, marginLeft: 10 }}>
							<SnackbarContent action={blog.profile.bio} message="BIO" sx={{ backgroundColor: "#2E3B55", color: 'white' }} />
						</Stack>
						<br></br>
						<Button variant='contained' color='warning' style={{ marginTop: 10, marginLeft: 120 }}>Follow</Button>
						<Button variant='contained' color='warning' style={{ marginTop: 10, marginLeft: 20 }}>Unfollow</Button>
					</Box>)
						)
					}
				})}
				</Grid>
				
			</Grid>
						


		</>
	)
}

export default Home;






