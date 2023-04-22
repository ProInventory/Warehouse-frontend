import React from "react";
import styled from "styled-components";

const Container = styled.div`
	.top-seller-store {
		width: clamp(100px, 50%, 200px);
		height: 85px;
		width: 424px;
		background: #e8e8e8;
		border-radius: 20px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
		transition: box-shadow 0.3s ease-in-out;
		position: relative;
	}

	.top-seller-store:hover {
		box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
	}

	.topic{
		position: absolute;
		margin-top:6%;
		margin-left: 6%;
		font-size: 24px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.devider{
		position: absolute;
		margin-top: 3.5%;
		margin-left: 38%;
		font-size: 40px;
		font-weight: regular;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.seller-name{
		position: relative;
		margin-top: 3.5%;
		margin-left: 45%;
		font-size: 20px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.item-data {
		font-size: 18px;
		font-weight: regular;
		font-style: italic;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		margin-left: 45%;
	}

	.amount-data {
		font-size: 18px;
		font-weight: regular;
		font-style: italic;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
		padding-left: 28px;
	}

	.store-name{
		position: relative;
		margin-top: 3.5%;
		margin-left: 58%;
		font-size: 20px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}


`;

const NumStat = () => {
	return (
		<div style={{ position: "relative", top: -400, left: 45 }}>
			<React.Fragment>
				<div style={{ display: "flex" }}>
					<Container style={{ marginRight: "20px", marginTop: "-50px" }}>
						<div className="top-seller-store">
								<label className="topic">Top Seller</label>
								<label className="devider"> | </label>
								<label className="seller-name">Mr. Sachin Dewthuru </label>
								
								<label className="item-data">223 Items</label>
								<label className="amount-data">16,695 LKR</label>
								<br></br>
						</div>

					</Container>

					<Container style={{ marginRight: "500px", marginTop: "-50px" }}>
						<div className="top-seller-store">
						<label className="topic">Top Store </label>
								<label className="devider"> | </label>
								<label className="store-name"> Store 02 </label>
								
								<label className="item-data">380 Items</label>
								<label className="amount-data">26,695 LKR</label>
								<br></br>
						</div>

					</Container>

				</div>
			</React.Fragment>
		</div>
	);
};

export default NumStat;
