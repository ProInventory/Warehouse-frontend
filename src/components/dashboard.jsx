import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "./common/navBar";
import SideBar from "./common/sideBar";
import MainDash from "./dashboard/main";
import NumStat from "./dashboard/numStat";
import Outlets from "./dashboard/outlets";
import Recent from "./dashboard/recent";
import Clock from "./dashboard/clock";

const Container = styled.div`
	display: flex;
	height: 100vh;
	flex-wrap: wrap; /* wrap children to new line if there isn't enough space */

	@media (max-width: 1000px) {
		& > div:first-child {
			display: none; /* hide sidebar if screen is narrower than 1000px */
		}

		& > div:last-child {
			width: 100%; /* make the dash elements wrapper take up the entire width */
		}
	}
`;

const SidebarWrapper = styled.div`
	width: 20%;
`;

const DashElementsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-color: #d1d1d1;
	width: 80%;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-color: #d1d1d1;
	width: 100%;

	@media (max-width: 1800px) {
		width: 135%;
		transform-origin: top left;
		transform: scale(0.78) translate(0%, 1%);
	}
`;

const Dashboard = () => {
	useEffect(() => {
		document.title = "Dashboard | ProInventory";
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";
	}, []);

	const [name, setName] = useState("User 1");

	return (
		<React.Fragment>
			<Container>
				<SidebarWrapper>
					<SideBar user={name} />
				</SidebarWrapper>
				<DashElementsWrapper>
					<NavBar />
					<Body>
						<MainDash />
						<NumStat />
						<Clock />
						<Outlets />
						<Recent />
					</Body>
				</DashElementsWrapper>
			</Container>
		</React.Fragment>
	);
};

export default Dashboard;
