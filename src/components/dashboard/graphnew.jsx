import styled from "styled-components";

const Container = styled.div`
	.center {
		width: 400px;
		height: 220px;
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
		padding: 20px 0px 5px 30px;
		font-size: 10px;
		font-weight: regular;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.label-time {
		position: relative;
		margin: 0px 0px;
		padding: 0px 0px 0px 160px;
		font-size: 15px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		top: -2px;
		left: -18px;
		letter-spacing: 8px;
	}

	.txt_field {
		padding: 100px 0px 50px 0px;
		transform: scale(0.9);
		position: relative;
		top: 22px;
		left: 0px;
	}

	.tooltip {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		font-size: 12px;
		padding: 5px 10px;
		border-radius: 5px;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	.bar:hover .tooltip {
		opacity: 1;
	}
`;

const Graph = () => {
	const values = [250, 500, 750, 300, 1000, 500, 380, 650, 400, 300];
	const maxValue = Math.max(...values);
	const percentages = values.map((value) => (value / maxValue) * 100);
	const date = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
	return (
		<div style={{ position: "relative", top: 0, left: 50 }}>
			<Container>
				<div className="center">
					<form>
						<div className="txt_field">
							{percentages.map((percentage, index) => (
								<div
									key={index}
									className="bar"
									style={{
										position: "absolute",
										bottom: 0,
										left: index * 40 + 10,
										width: 20,
										height: percentage + "%",
										background: "#71797E",
										borderRadius: "5px",
										boxSizing: "border-box",
										transition:
											"background-color 0.1s ease-in-out",
									}}
									onMouseOver={(e) => {
										e.target.style.backgroundColor =
											"#b19cd8";
									}}
									onMouseOut={(e) => {
										e.target.style.backgroundColor =
											"#71797E";
									}}
								>
									<div className="tooltip">
										{values[index]}
									</div>
								</div>
							))}
						</div>
						<label
							className="label-stat"
							style={{ letterSpacing: "7.6px" }}
						>
							{date.join(" ")}
						</label>

						<label className="label-time"> D W M Y</label>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Graph;
