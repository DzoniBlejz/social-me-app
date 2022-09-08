import { ExpandMore, Favorite, Share } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";

const Feed = ({ image }) => {
	return (
		<Box bgcolor="pink" flex={4} p={2}>
			<Card>
				<CardHeader
					avatar={
						<Avatar
							sx={{ bgcolor: "#F44336" }}
							aria-label="recipe"
							src={image}
						></Avatar>
					}
					action={<IconButton aria-label="settings"></IconButton>}
					title="Moonsama TownHall"
					subheader="September 7, 2022"
				/>
				<CardMedia
					component="img"
					height="194"
					src="https://pbs.twimg.com/media/FcD_D5SWQAAdqzv?format=jpg&name=large"
					alt="Moonsama TownHall"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						A place where the real stories and great ideas are born. Place full
						of winners!
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<Favorite />
					</IconButton>
					<IconButton aria-label="share">
						<Share />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Feed;
