import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		height: 440px;
		width: 400px;
		background: #e8e8e8;
		border-radius: 25px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
	}

	.center:hover {
		box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
	}

	.label-stat {
		position: relative;
		margin: 0px 0px;
		padding: 15px 0px 0px 15px;
		font-size: 24px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.time-txt {
		font-size: 16px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding: 0px 116px 0px 15px;
	}

	.time-txt-sales {
		font-size: 16px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding: 40px 0px 0px 15px;
	}

	.status {
		position: relative;
		font-size: 14px;
		font-weight: regular;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding: 0px 0px 0px 15px;
		top: -8px;
	}

	.time-data {
		position: relative;
		font-size: 14px;
		font-weight: regular;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding: 0px 0px 0px 15px;
		left: 120px;
		top: -15px;
	}

	.time-data-big {
		font-size: 35px;
		font-weight: 800;
		color: #6c757d;
		font-family: "Rubik";
		padding: 0px 10px 0px 15px;
		position: relative;
		top: -10px;
		transition: color 0.3s ease-in-out;
	}
	.time-data-big:hover {
		color: #00000f;
		transition: color 0.2s ease-in-out;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
			monospace;
	}

	.Title {
		position: relative;
		margin: 0px 0px;
		padding: 20px 10px 25px 5px;
		font-size: 24px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.TitleSmall {
		position: relative;
		margin: 0px 0px;
		font-size: 18px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		left: 88px;
	}

	.TitleSmall:hover {
		color: #000000;
	}

	.activity-card {
		height: 80px;
		width: 400px;

		border-radius: 1px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
	}

	.activity-card-start {
		height: 80px;
		width: 400px;

		border-radius: 1px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
	}

	.activity-card-end {
		height: 80px;
		width: 400px;

		border-radius: 1px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
		opacity: 0.5;
	}
`;

const NumStat = () => {
	return (
		<div style={{ position: "relative", top: -795, left: 950 }}>
			<React.Fragment>
				<Container>
					<div className="Titles">
						<label className="Title">Recent Activities</label>
						<label className="TitleSmall">See All ➜</label>
					</div>
					<div className="center">
						<form>
							<div className="activity-card-start">
								<label className="label-stat">Store 01</label>
								<br />
								<label className="status">
									Stock Update : Pending
								</label>
								<label className="time-data">5 sec ago</label>
							</div>
							<div className="activity-card">
								<label className="label-stat">Store 02</label>
								<br />
								<label className="status">
									Stock Update : Pending
								</label>
								<label className="time-data">2 min ago</label>
							</div>
							<div className="activity-card">
								<label className="label-stat">Store 03</label>
								<br />
								<label className="status">
									Stock Update : Pending
								</label>
								<label className="time-data">4 min ago</label>
							</div>

							<div className="activity-card">
								<label className="label-stat">Store 03</label>
								<br />
								<label className="status">
									Stock Update : Pending
								</label>
								<label className="time-data">6 min ago</label>
							</div>
							<div className="activity-card-end">
								<label className="label-stat">Store 04</label>
								<br />
								<label className="status">
									Stock Update : Pending
								</label>
								<label className="time-data">9 min ago</label>
							</div>
						</form>
					</div>
				</Container>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
