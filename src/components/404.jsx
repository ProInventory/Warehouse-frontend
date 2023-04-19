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

	#notFound {
		background-color: #d1d1d1;
		display: table-cell;
		width: 80%;
	}
`;

const NotFound = () => {
	return (
		<React.Fragment>
			<Container>
				<div id="#parent">
					<div id="sidebar">
						<SideBar />
					</div>
					<div id="notFound">
						<div className="notFound">
							<h1>404</h1>
							<h2>Page not found</h2>
							<p>
								Sorry, the page you are looking for does not
								exist.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default NotFound;
