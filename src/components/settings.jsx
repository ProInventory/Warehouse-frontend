import React from "react";
import styled from "styled-components";

import SideBar from "./sideBar";

const Container = styled.div`
	#parent {
		display: table;
		width: 100%;
		height: 100%;
	}

	#sidebar {
		display: table-cell;
		width: 20%;
		vertical-align: top;
	}

	#settings {
		background-color: #d1d1d1;
		display: table-cell;
		width: 80%;
	}
`;

const Settings = () => {
	return (
		<React.Fragment>
			<Container>
				<div id="#parent">
					<div id="sidebar">
						<SideBar />
					</div>
					<div id="settings">
						<h1>Settings</h1>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default Settings;
