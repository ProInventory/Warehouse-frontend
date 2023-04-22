import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMessage, faBell } from "@fortawesome/free-solid-svg-icons";

let today = new Date();
let curHr = today.getHours();
let time = "";

var timeData = [
	[0, 4, "night"],
	[5, 11, "morning"],
	[12, 17, "afternoon"],
	[18, 24, "night"],
];

for (var i = 0; i < timeData.length; i++) {
	if (curHr >= timeData[i][0] && curHr <= timeData[i][1]) {
		time = timeData[i][2];
	}
}

const Container = styled.div`
	.welcome {
		padding: 15px;
		padding-left: 50px;
		font-family: "Rubik";
	}

	.welcomeHead {
		font-size: 20px;
		font-weight: 700;
	}

	.welcomeBody {
		font-size: 15px;
		font-style: italic;
		position: relative;
		top: -8px;
	}

	.name {
		display: inline;
		color: #ab47bc;
	}

	.icons {
		padding: 5px;
		position: absolute;
		right: 0;
		top: 20px;
		width: 15%;
	}

	.searchBar {
		padding-top: 16px;
		padding-right: 5px;
		position: absolute;
		right: 15%;
		top: 10px;
		width: 25%;
	}

	.searchbox,
	.searchIcon {
		background-color: #e8e8e8;
	}

	.circle-container {
		position: relative;
		width: 50px;
		height: 50px;
	}

	.circle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #ddd;
	}

	.circle:hover {
		background-color: #c0c0c0;
	}

	.fa {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 25px;
		color: black;
		z-index: 1;
	}

	.messages,
	.alerts,
	.profile {
		cursor: pointer;
		position: absolute;
		top: 0;
	}

	.messages {
		position: relative;
		right: -15px;
		top: -5px;
	}

	.alerts {
		position: relative;
		right: -105px;
		top: -55px;
	}

	.profile {
		position: relative;
		right: -200px;
		top: -105px;
	}

	.image-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 80%;
		border-radius: 50%;
		overflow: hidden;
	}

	.userImg {
		display: block;
		width: 100%;
		height: auto;
	}

	.notification-count {
		position: absolute;
		top: 2px;
		right: -10px;
		background-color: red;
		color: white;
		font-size: 12px;
		font-weight: bold;
		border-radius: 50%;
		padding: 2px 6px;
	}

	.message-container {
		display: none;
	}
`;

const NavBar = () => {
	const [name, setName] = useState("User 1");

	return (
		<React.Fragment>
			<Container>
				<div className="welcome">
					<div className="welcomeHead">
						Welcome <div className="name">{name}</div>,
					</div>

					<div className="welcomeBody">
						Welcome back, Have a great {time}!
					</div>
				</div>

				<div className="searchBar">
					<div className="input-group mb-3">
						<span
							className="input-group-text searchIcon"
							id="basic-addon1"
						>
							<FontAwesomeIcon icon={faSearch} />
						</span>
						<input
							type="text"
							className="form-control searchbox"
							placeholder="Search..."
							aria-label="Search"
							aria-describedby="basic-addon1"
						/>
					</div>
				</div>

				<div className="icons">
					<div className="circle-container messages">
						<div className="circle"></div>
						<FontAwesomeIcon icon={faMessage} className="fa" />
						<div className="notification-count">5</div>
					</div>
					<div className="circle-container alerts">
						<div className="circle"></div>
						<FontAwesomeIcon icon={faBell} className="fa" />
						<div className="notification-count">10</div>
					</div>
					<div className="circle-container profile">
						<div className="circle"></div>
						<div className="image-container">
							<img
								className="userImg"
								src="user.png"
								alt={name}
							/>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default NavBar;
