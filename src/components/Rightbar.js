import React from "react";
import { Box } from "@mui/system";
import {
	Avatar,
	AvatarGroup,
	ImageList,
	ImageListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
			title: "Breakfast",
		},
		{
			img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
			title: "Burger",
		},
		{
			img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
			title: "Camera",
		},
		{
			img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
			title: "Coffee",
		},
		{
			img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
			title: "Hats",
		},
		{
			img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
			title: "Honey",
		},
		{
			img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
			title: "Basketball",
		},
		{
			img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
			title: "Fern",
		},
		{
			img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
			title: "Mushrooms",
		},
		{
			img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
			title: "Tomato basil",
		},
		{
			img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
			title: "Sea star",
		},
		{
			img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
			title: "Bike",
		},
	];

	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed" width={400}>
				<Typography variant="h6" fontWeight={300} mt={2}>
					Online friends
				</Typography>
				<AvatarGroup max={6}>
					<Avatar
						alt="Remy Sharp"
						src="https://pbs.twimg.com/media/FbvTf75akAELzZz?format=jpg&name=small"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://pbs.twimg.com/profile_images/1566508397184294912/ezU6g2Pu_400x400.jpg"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://pbs.twimg.com/profile_images/1566907520517636099/HqdU2gqL_400x400.jpg"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://pbs.twimg.com/profile_images/1564950335386517504/K72OZChN_400x400.jpg"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://pbs.twimg.com/profile_images/1567493621678497794/A4l5WUdp_400x400.jpg"
					/>
				</AvatarGroup>
				<Typography variant="h6" fontWeight={300}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100} gap={5}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={300}>
					Latest Conversations
				</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Rightbar;
