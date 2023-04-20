import React, { useState } from "react";
import styled from "styled-components";

import Graph from "./graph";

const Container = styled.div`
	.graphContainer {
		padding-left: 50px;
	}

	.graph {
		possition: relative;
		border-radius: 25px;
		background: #e8e8e8;
		padding: 20px;
		width: 400px;
	}
`;

const MainDash = () => {
	const [name, setName] = useState("User 1");

	const side = document.querySelector("#root");
	side.style.setProperty("height", "100%");

	return (
		<React.Fragment>
			<Container>
				<div className="graphContainer">
					<div className="graph">
						<Graph />
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default MainDash;
