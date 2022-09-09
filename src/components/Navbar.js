import styled from "@emotion/styled";
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import TocIcon from "@mui/icons-material/Toc";
import { Box } from "@mui/system";
import { Mail, Notifications } from "@mui/icons-material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const StyledToolBar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(() => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: "10px",
	width: "40%",
}));

const Icons = styled(Box)(() => ({
	display: "flex",
	gap: "20px",
	alignItems: "center",
}));

const UserBox = styled(Box)(() => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
}));

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="sticky">
			<StyledToolBar>
				<Typography sx={{ display: { xs: "none", sm: "block" } }}>
					<SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
				</Typography>
				<TocIcon sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..."></InputBase>
				</Search>
				<Icons>
					<Badge
						badgeContent={2}
						color="error"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						<Mail />
					</Badge>
					<Badge sx={{ display: { xs: "none", sm: "block" } }}>
						<Notifications />
					</Badge>
					<UserBox>
						<Avatar
							src="https://pbs.twimg.com/profile_images/1565885281953353728/RmrdW7oX_400x400.jpg"
							onClick={(e) => setOpen(true)}
						/>
						<Typography>JohnnyBlaze</Typography>
					</UserBox>
				</Icons>
			</StyledToolBar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
}

export default Navbar;
