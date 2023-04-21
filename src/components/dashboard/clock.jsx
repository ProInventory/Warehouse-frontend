import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		position: relative;
		width: 400px;
		height: 220px;
		border-radius: 25px;
		overflow: hidden; /* this will hide any overflow of the pseudo-element */
		background-image: url(night_gif.gif);
		background-size: cover;
		background-position: center;
	}

	.center:hover {
		box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
	}

	.label-stat {
		position: relative;
		margin: 0px 0px;
		padding: 0px 0px 0px 15px;
		font-size: 24px;
		font-weight: bold;
		color: #ffffff;
		font-family: "Rubik", sans-serif;
	}

	.time-txt {
		font-size: 16px;
		font-weight: bold;
		color: #d3d3d3;
		font-family: "Rubik", sans-serif;
		padding: 22px 0px 0px 15px;
	}

	.time-data-big {
		font-size: 55px;
		font-weight: 800;
		color: #ffffff;
		font-family: "Rubik";
		padding: 10px 10px 0px 15px;
		position: relative;
		top: -10px;
		transition: color 0.3s ease-in-out;
	}
	.time-data-big:hover {
		color: #d3d3d3;
		transition: color 0.2s ease-in-out;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
			monospace;
	}

	@media (max-width: 1800px) {
		position: relative;
		top: 45px;
		transform-origin: top left;
		transform: scale(0.8);

		.center {
			width: 500px;
			height: 220px;
		}
	}
`;

const Clock = () => {
	return (
		<div style={{ position: "relative", top: -440, left: 950 }}>
			<React.Fragment>
				<Container>
					<div className="center">
						<form>
							<div className="txt_field">
								<label className="time-txt">Today is,</label>
								<br></br>
								<label className="label-stat">
									Friday, 21st April
								</label>
								<br></br>
								<br></br>
								<br></br>
								<label className="time-data-big">
									10:25:50 PM
								</label>
							</div>
						</form>
					</div>
				</Container>
			</React.Fragment>
		</div>
	);
};

export default Clock;
