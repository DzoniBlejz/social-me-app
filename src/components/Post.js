import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

function Post({ image }) {
	const seeYa = (e) => {
		console.log(e.target.value);
	};

	return (
		<div>
			<Card sx={{ m: 5 }}>
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
					height="35%"
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
					<IconButton onClick={seeYa} aria-label="add to favorites">
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite sx={{ color: "red" }} />}
						/>
					</IconButton>
					<IconButton aria-label="share">
						<Share />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
}

export default Post;
