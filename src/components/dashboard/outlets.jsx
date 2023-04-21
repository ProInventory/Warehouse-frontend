import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		width: clamp(100px, 50%, 200px);
		height: 250px;
		width: 200px;
		background: #e8e8e8;
		border-radius: 25px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
		text-align: center;
	}

	.center:hover {
		box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
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

	.progress{
		width:140px;
		height:140px;
		position: relative;
		margin-left: 15%;
		border-radius: 50%;
		background: #e8e8e8;
	}

	.outer{
		height: 140px;
    	width: 140px;
    	border-radius: 50%;
		padding: 10.5%;
		box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
					-6px -6px 10px -1px rgba(255,255, 255, 0.7);
	}

	.inner{
		height: 110px;
    	width: 110px;
    	border-radius: 50%;
		display: flex;
    	align-items: center;
    	justify-content: center;
    	box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
                    0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                    0px 12px 10px -10px rgba(0, 0, 0, 0.15);
	}

	#percentage{
		font-weight: bolder;
		font-family: "Rubik", sans-serif;
		color:#b19cd8;
		font-size: 30px;
	}

	circle{
		fill: none;
		stroke: #b19cd8;
		stroke-width: 20px
		stroke-dasharray: 200px;
		stroke-dashoffset: 0px;
	}

	svg{
		position: absolute;
    	top:0;
    	left:0;
}
	}

	.label-stat {
		position: relative;
		font-size: 24px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.label-stat:hover {
		color: #00000f;
		transition: color 0.2s ease-in-out;
	}

	.label-stat-location {
		font-size: 18px;
		font-weight: lighter;
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

	@media screen and (max-width: 1800px) {
		transform: scale(1);
	}
`;

const NumStat = () => {
	return (
		<div style={{ position: "relative", top: -410, left: 45 }}>
			<React.Fragment>
				<div style={{ display: "flex" }}>
					<Container style={{ marginRight: "20px" }}>
						<label className="Title">My Outlets</label>
						<div className="center">
							<form>
								<div className="txt_field">
									<br></br>
									<div className="progress">
										<div className="outer">
											<div className="inner">
												<div id="percentage">
													75%
												</div>
											</div>
										</div>

										<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
												<defs>
													<linearGradient id="GradientColor">
													<stop offset="0%" stop-color="#e91e63" />
													<stop offset="100%" stop-color="#673ab7" />
													</linearGradient>
												</defs>
												<circle cx="80" cy="80" r="70" stroke-linecap="round" />
										</svg>

									</div>

									<label className="label-stat">
										Store 01
										<br></br>
										<label className="label-stat-location">
											Malabe
										</label>
									</label>
									<br></br>
								</div>
							</form>
						</div>
					</Container>
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
									<label className="label-stat">
										Store 02
										<br></br>
										<label className="label-stat-location">
											Kandy
										</label>
									</label>
									<br></br>
								</div>
							</form>
						</div>
					</Container>
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
									<label className="label-stat">
										Store 03
										<br></br>
										<label className="label-stat-location">
											Homagama
										</label>
									</label>
									<br></br>
								</div>
							</form>
						</div>
					</Container>
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
									<label className="label-stat">
										Store 04
										<br></br>
										<label className="label-stat-location">
											Kegalle
										</label>
									</label>
									<br></br>
								</div>
							</form>
						</div>
					</Container>
				</div>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
