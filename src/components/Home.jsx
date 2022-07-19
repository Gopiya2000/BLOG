import { CardContent, Typography, CardMedia, Avatar, CardHeader, Card, Button, ButtonGroup } from '@mui/material'
import React from 'react';
import { viewBlogs } from '../store/Actions/blogActions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {

	const blogs = useSelector((state) => state.blog.blogs)
	const profile = useSelector((state) => state.profileDetails)
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

	return (
		<>
			<Button onClick={() => addBlogHandler()} variant='contained' color='warning' style={{ marginTop: 10 }}  >Add Blog
			</Button>
			{blogs && blogs.map((blog, index) => {
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






