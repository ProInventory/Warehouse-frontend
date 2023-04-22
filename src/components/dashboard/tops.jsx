import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.top-seller-store {
		width: clamp(100px, 50%, 200px);
		display:flex;
		height: 80px;
		width: 424px;
		background: #e8e8e8;
		border-radius: 20px;
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
		<div style={{ position: "relative", top: -401, left: 45 }}>
			<React.Fragment>
				<div style={{ display: "flex" }}>
					<Container style={{ marginRight: "20px", marginTop: "-50px" }}>
						<div className="top-seller-store">

						</div>

					</Container>

					<Container style={{ marginRight: "500px", marginTop: "-50px" }}>
						<div className="top-seller-store">

						</div>

					</Container>

				</div>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
