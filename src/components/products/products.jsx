import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	.center {
		width: clamp(100px, 50%, 200px);
		height: 220px;
		width: 170px;
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

	.label-stat {
        padding-top: 12px;
        padding-bottom: 30px;
		position: relative;
		font-size: 20px;
		font-weight: bold;
		color: #6c757d;
		font-family: "Rubik", sans-serif;
	}

	.label-stat:hover {
		color: #00000f;
		transition: color 0.2s ease-in-out;
	}

	.label-stat-location {
		font-size: 15px;
		font-weight: lighter;
	}

    .btn-Minus{
		background:  #b19cd8;
        border: 0;
		width:100%;
		height:14.5%;
		font-size: 18px;
		font-weight: bolder;
		color: white;
		font-family: "Rubik", sans-serif;
		font-weight: lighter;
		border-top-left-radius: 25px;
  		border-top-right-radius: 25px;
  		border-bottom-left-radius: 0;
  		border-bottom-right-radius: 0;
	}

    .btn-Minus:hover{
		background: #6c757d;
	}

	.btn-Plus{
		background:  #b19cd8;
        border: 0;
		width:100%;
		height:14.5%;
		font-size: 18px;
		font-weight: bolder;
		color: white;
		font-family: "Rubik", sans-serif;
		font-weight: lighter;
		border-top-left-radius: 0;
  		border-top-right-radius: 0;
  		border-bottom-left-radius: 25px;
  		border-bottom-right-radius: 25px;
	}

	.btn-Plus:hover{
		background: #6c757d;
	}
`;

const ProductPanel = () => {
	const [productName, setProductName] = useState("Product Name");
    const [productCount, setCount] = useState("Product Count");
    const [unitPrice, setPrice] = useState("Unit Price");

	return (
		<Container style={{ marginRight: "20px", marginTop: "80px", marginLeft: "20px" }}>
			<div className="center">
                <button className="btn-Minus"> - </button>
				<form>
					<div className="txt_field">
				    <br></br>
					<label className="label-stat">
					{productName}
					<br></br>
					<label className="label-stat-location">
					{productCount}
					</label>
                    <br></br>
                    <label className="label-stat-location">
					{unitPrice}
					</label>
					</label>
					</div>
				</form>
				<button className="btn-Plus"> + </button>
			</div>
		</Container>
	);
};

export default ProductPanel;
