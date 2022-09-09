import React, { useState } from "react";
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";
import {
	Avatar,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
});

function Add() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title="Delete"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50% - 25)", md: 30 },
				}}
			>
				<Fab size="medium" color="secondary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={280}
					p={3}
					borderRadius={5}
					bgcolor={"background.default"}
					color={"text.primary"}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create post
					</Typography>
					<UserBox>
						<Avatar
							src="https://pbs.twimg.com/profile_images/1567493621678497794/A4l5WUdp_400x400.jpg"
							sx={{ width: 30, height: 30 }}
						></Avatar>
						<Typography fontWeight={500} variant="span">
							John Doe
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary"></Image>
						<VideoCameraBack color="success"></VideoCameraBack>
						<PersonAdd color="error"></PersonAdd>
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<DateRange></DateRange>
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
}

export default Add;
