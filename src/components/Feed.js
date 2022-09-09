import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = ({ image }) => {
	return (
		<Box flex={4} p={2}>
			<Post image={image}></Post>
			<Post image={image}></Post>
			<Post image={image}></Post>
			<Post image={image}></Post>
		</Box>
	);
};

export default Feed;
