import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/system";
import Navbar from "./components/Navbar";

function App() {
	const profile =
		"https://pbs.twimg.com/profile_images/1565885281953353728/RmrdW7oX_400x400.jpg";

	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<Sidebar />
				<Feed image={profile} />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;
