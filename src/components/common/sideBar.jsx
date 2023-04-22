import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCubesStacked,
	faChartSimple,
	faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	* {
		font-family: "Roboto", sans-serif;
	}

	.side {
		background-color: #e8e8e8;
		background-image: url(pattern.png);
		background-size: 500px;
		background-position: center;
		background-repeat: repeat;
	}

	.logoImage {
		display: flex;
		justify-content: center;
	}

	.logoImage img {
		padding-top: 30px;
		padding-left: 5%;
		padding-right: 5%;
		width: 90%;
	}

	.sideBar_items {
		position: absolute;
		top: 16%;
		margin-left: 2%;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.sideBar_items div {
		margin-top: 10%;
	}

	.menu_items {
		margin-top: 0%;
		margin-left: 5%;
	}

	table {
		border-collapse: separate;
		border-spacing: 10px;
	}

	.box {
		height: 100vh; /* set the height of the container to the height of the viewport */
		display: flex;
		transition: 0.5s ease-in-out;
		position: absolute;
		top: 95%;
		width: 20%;
		max-width: 20%;
		border-top-left-radius: 60px;
		border-top-right-radius: 60px;
		padding: 10px;
		background-color: #b19cd8;
	}

	.box::before {
		content: "?";
		font-size: 40px;
		font-weight: bold;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -40px;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-color: #b19cd8;
		border: 7px solid white;
	}

	.box_content {
		color: white;
		text-align: center;
		padding-top: 40px;
	}

	.box_content .title {
		font-weight: bold;
		font-size: 1.4rem;
	}

	.box_content .content {
		font-size: 1rem;
		margin-top: 10px;
		margin-left: 12px;
		margin-right: 12px;
	}

	.box_content .button {
		margin-top: 2%;
	}

	.box_content .contact_button {
		border-radius: 20px;
		background-color: #e8e8e8;
		color: black;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
	}

	.box:hover {
		transition: 0.5s ease-in-out;
		top: 60%;
	}

	a:link {
		color: #36454f;
		text-decoration: none;
	}

	a:visited {
		color: #36454f;
		text-decoration: none;
	}

	a:hover {
		color: #36454f;
		text-decoration: underline;
	}

	a:active {
		color: #36454f;
		text-decoration: underline;
	}
	.logout {
		color: #ff0000;

		a:link {
			color: #ff0000;
			text-decoration: none;
		}

		a:visited {
			color: #ff0000;
			text-decoration: none;
		}

		a:hover {
			color: #ff0000;
			text-decoration: underline;
		}

		a:active {
			color: #ff0000;
			text-decoration: underline;
		}
	}
`;

const SideBar = (props) => {
	const { user } = props;

	return (
		<React.Fragment>
			<Container>
				<div className="side" style={{ height: "100vh" }}>
					<div className="logoImage">
						<img src="logo_sidebar.png" alt="logo" />
					</div>
				</div>

				<div className="sideBar_items">
					<div className="menu">
						QUICK MENU
						<table className="menu_items">
							<tbody>
								<tr>
									<td>
										<FontAwesomeIcon icon={faBars} />
									</td>
									<td>
										<Link to="/home">Dashboard</Link>
									</td>
								</tr>
								<tr>
									<td>
										<FontAwesomeIcon
											icon={faCubesStacked}
										/>
									</td>
									<td>
										<Link to="/status">Status</Link>
									</td>
								</tr>
								<tr>
									<td>
										<FontAwesomeIcon icon={faChartSimple} />
									</td>
									<td>
										<Link to="/charts">Charts</Link>
									</td>
								</tr>
								<tr>
									<td>
										<FontAwesomeIcon icon={faTruck} />
									</td>
									<td>
										<Link to="/deliveries">Deliveries</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="settings">
						<Link to="/settings">SETTINGS</Link>
					</div>
					<div className="billing">
						<Link to="/billing">BILLING</Link>
					</div>
					<div className="products">
						<Link to="/products">PRODUCTS</Link>
					</div>
					<div className="logout">
						<Link to="/">LOG OUT</Link>
					</div>
				</div>

				<div className="box">
					<div className="box_content">
						<div className="title">Help Center</div>
						<div className="content">
							Having trouble {user}? Check out our software guide
							or contact support for more questions.
						</div>

						<div className="button">
							<button className="contact_button">
								Go to help center
							</button>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default SideBar;
