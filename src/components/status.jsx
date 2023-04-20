import React from "react";
import styled from "styled-components";

import StatusPanel from "./status/status";
import SideBar from "./common/sideBar";

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

	#status {
		background-color: #d1d1d1;
		display: table-cell;
		width: 80%;
	}
`;

const Status = () => {
	return (
		<React.Fragment>
			<Container>
				<div id="#parent">
					<div id="sidebar">
						<SideBar />
					</div>
					<div id="status">
						<StatusPanel />
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default Status;
