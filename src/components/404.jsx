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

	.not-found-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #d1d1d1;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	.not-found-message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.not-found-header {
		font-size: 6rem;
		font-weight: bold;
		color: #3b5998;
		margin-bottom: 0;
	}

	.not-found-text {
		font-size: 2.5rem;
		color: #606770;
		margin-top: 0;
		text-align: center;
	}

	.not-found-image {
		margin-top: 2rem;
		width: 10rem;
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
							<div className="not-found-container">
								<div className="not-found-message">
									<h1 className="not-found-header">Oops!</h1>
									<p className="not-found-text">
										We can't seem to find the page you're
										looking for.
									</p>
								</div>
								<img
									src="/logo.png"
									alt="ProInventory logo"
									className="not-found-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default NotFound;
