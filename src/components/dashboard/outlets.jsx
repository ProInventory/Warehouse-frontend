import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		width: clamp(100px, 50%, 200px);
		height: 300px;
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

	.TitleSmall {
		position: relative;
		margin: 0px 0px;
		font-size: 18px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		left: 610px;
	}
	.TitleSmall:hover {
		color: #000000;
	}

	.progress {
		width: 160px;
		height: 160px;
		position: relative;
		margin-left: 10%;
		border-radius: 50%;
		background: #e8e8e8;
	}

	.outer {
		height: 160px;
		width: 160px;
		border-radius: 50%;
		padding: 9%;
		box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
			-6px -6px 10px -1px rgba(255, 255, 255, 0.7);
	}

	.inner {
		background: #e8e8e8;
		height: 130px;
		width: 130px;
		border-radius: 50%;
		justify-content: center;
		display: flex;
		align-items: center;
		box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
			inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
			-0.5px -0.5px 0px rgba(255, 255, 255, 1),
			0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
			0px 12px 10px -10px rgba(0, 0, 0, 0.15);
	}

	#percentage {
		font-weight: bolder;
		font-family: "Rubik", sans-serif;
		color: #b19cd8;
		font-size: 30px;
	}

	.circle-1 {
		fill: none;
		stroke: #b19cd8;
		stroke-width: 20px;
		stroke-dasharray: 472;
		stroke-dashoffset: 472;
		animation: anim 0.5s linear forwards;
	}

	.svg-1 {
		position: absolute;
		top: 0;
		left: 0;
	}

	@keyframes anim {
		100% {
			stroke-dashoffset: 118; /* 188 calculated by (472-472*0.75) */
		}
	}

	.circle-2 {
		fill: none;
		stroke: #b19cd8;
		stroke-width: 20px;
		stroke-dasharray: 472;
		stroke-dashoffset: 472;
		animation: anim2 0.5s linear forwards;
	}

	.svg-2 {
		position: absolute;
		top: 0;
		left: 0;
	}

	@keyframes anim2 {
		100% {
			stroke-dashoffset: 236; /* 188 calculated by (472-472*0.75) */
		}
	}

	.circle-3 {
		fill: none;
		stroke: #b19cd8;
		stroke-width: 20px;
		stroke-dasharray: 472;
		stroke-dashoffset: 472;
		animation: anim3 0.5s linear forwards;
	}

	.svg-3 {
		position: absolute;
		top: 0;
		left: 0;
	}

	@keyframes anim3 {
		100% {
			stroke-dashoffset: 103; /* 188 calculated by (472-472*0.75) */
		}
	}

	.circle-4 {
		fill: none;
		stroke: #b19cd8;
		stroke-width: 20px;
		stroke-dasharray: 472;
		stroke-dashoffset: 472;
		animation: anim4 0.5s linear forwards;
	}

	.svg-4 {
		position: absolute;
		top: 0;
		left: 0;
	}

	@keyframes anim4 {
		100% {
			stroke-dashoffset: 424; /* 188 calculated by (472-472*0.75) */
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

	.btn{
		background:  #b19cd8;
		width:100%;
		height:14.5%;
		font-size: 18px;
		font-weight: bold;
		color: white;
		font-family: "Rubik", sans-serif;
		font-weight: lighter;
		border-top-left-radius: 0;
  		border-top-right-radius: 0;
  		border-bottom-left-radius: 25px;
  		border-bottom-right-radius: 25px;
	}

	.btn:hover{
		background: #6c757d;
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

	.top-seller-store {
		width: clamp(100px, 50%, 200px);
		display:flex;
		height: 70px;
		width: 424px;
		background: #e8e8e8;
		border-radius: 15px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
		text-align: center;
	}

	.top-seller-store:hover {
		box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
	}

`;

const NumStat = () => {
	return (
		<div style={{ position: "relative", top: -410, left: 45 }}>
			<React.Fragment>
				<div style={{ display: "flex" }}>
					<Container style={{ marginRight: "0px" }}>
						<div className="Titles">
							<label className="Title">My Outlets</label>
							<label className="TitleSmall">See All ➜</label>
						</div>
						<div className="center">
							<form>
								<div className="txt_field">
									<br></br>
									<div className="progress">
										<div className="outer">
											<div className="inner">
												<div id="percentage">  75% </div>
											</div>
										</div>

										<svg class="svg-1"
											xmlns="http://www.w3.org/2000/svg"
											version="1.1"
											width="160px"
											height="160px"
										>
											<defs>
												<linearGradient id="GradientColor">
													<stop
														offset="0%"
														stop-color="#e91e63"
													/>
													<stop
														offset="100%"
														stop-color="#673ab7"
													/>
												</linearGradient>
											</defs>
											<circle class="circle-1"
												cx="80"
												cy="80"
												r="70"
												stroke-linecap="round"
											/>
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

							<button className="btn"> See More </button>
						</div>
					</Container>
					
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
									<br></br>
									<div className="progress">
										<div className="outer">
											<div className="inner">
												<div id="percentage">50%</div>
											</div>
										</div>

										<svg class="svg-2"
											xmlns="http://www.w3.org/2000/svg"
											version="1.1"
											width="160px"
											height="160px"
										>
											<defs>
												<linearGradient id="GradientColor">
													<stop
														offset="0%"
														stop-color="#e91e63"
													/>
													<stop
														offset="100%"
														stop-color="#673ab7"
													/>
												</linearGradient>
											</defs>
											<circle 
												class="circle-2"
												cx="80"
												cy="80"
												r="70"
												stroke-linecap="round"
											/>
										</svg>
									</div>
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
							<button className="btn"> See More </button>
						</div>
					</Container>
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
								<br></br>
								<div className="progress">
										<div className="outer">
											<div className="inner">
												<div id="percentage">78%</div>
											</div>
										</div>

										<svg class="svg-3"
											xmlns="http://www.w3.org/2000/svg"
											version="1.1"
											width="160px"
											height="160px"
										>
											<defs>
												<linearGradient id="GradientColor">
													<stop
														offset="0%"
														stop-color="#e91e63"
													/>
													<stop
														offset="100%"
														stop-color="#673ab7"
													/>
												</linearGradient>
											</defs>
											<circle 
												class="circle-3"
												cx="80"
												cy="80"
												r="70"
												stroke-linecap="round"
											/>
										</svg>
									</div>

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
							<button className="btn"> See More </button>
						</div>
					</Container>
					<Container
						style={{ marginRight: "20px", marginTop: "80px" }}
					>
						<div className="center">
							<form>
								<div className="txt_field">
								<br></br>
								<div className="progress">
										<div className="outer">
											<div className="inner">
												<div id="percentage">10%</div>
											</div>
										</div>

										<svg class="svg-4"
											xmlns="http://www.w3.org/2000/svg"
											version="1.1"
											width="160px"
											height="160px"
										>
											<defs>
												<linearGradient id="GradientColor">
													<stop
														offset="0%"
														stop-color="#e91e63"
													/>
													<stop
														offset="100%"
														stop-color="#673ab7"
													/>
												</linearGradient>
											</defs>
											<circle 
												class="circle-4"
												cx="80"
												cy="80"
												r="70"
												stroke-linecap="round"
											/>
										</svg>
									</div>

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
							<button className="btn"> See More </button>
						</div>
					</Container>
				</div>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
