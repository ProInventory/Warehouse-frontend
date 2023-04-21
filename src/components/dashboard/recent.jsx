import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		height: 340px;
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

	.time-data {
		font-size: 14px;
		font-weight: regular;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding: 0px 116px 0px 15px;
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
`;

const NumStat = () => {
	return (
		<div style={{ position: "relative", top: -440, left: 950 }}>
			<React.Fragment>
				<Container>
					<div className="center">
						<form>
							<div className="txt_field">
								<label className="label-stat">Statistics</label>
								<br></br>
								<label className="time-txt">Today</label>
								<label className="time-txt">This Month</label>
								<br></br>
								<label className="time-data">3 Refills</label>
								<label className="time-data">76 Refills</label>
								<br></br>
								<label className="time-txt-sales">
									Today Sales
								</label>
								<br></br>
								<label className="time-data-big">
									96,440.00 LKR➜
								</label>
							</div>
						</form>
					</div>
				</Container>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
