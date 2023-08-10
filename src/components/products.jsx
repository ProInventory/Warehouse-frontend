import React, { useEffect } from "react";
import styled from "styled-components";

import SideBar from "./common/sideBar";
import ProductPanel from "./products/products";

const Container = styled.div`
	#parent {
		display: table;
		width: 100%;
		height: 100%;
	}

	#sidebar {
		display: table-cell;
		width: 20%;
		vertical-align: top;
	}

	#settings {
		background-color: #d1d1d1;
		display: table-cell;
		width: 80%;
	}
`;

const Products = () => {
	useEffect(() => {
		document.title = "Settings | ProInventory";
	}, []);

	return (
		<React.Fragment>
			<Container>
				<div id="#parent">
					<div id="sidebar">
						<SideBar />
					</div>
					<div id="settings">
						<ProductPanel />
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default Products;
