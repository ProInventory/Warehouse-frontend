import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		border-bottom: 1px solid #dddfe2;
	}

	.popup-header h2 {
		margin: 0;
		font-size: 20px;
		font-weight: bold;
	}

	.popup-body {
		flex-grow: 1;
		padding: 16px;
	}

	.popup-footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 16px;
		border-top: 1px solid #dddfe2;
	}

	.post-button {
		background-color: #1877f2;
		color: white;
		border: none;
		border-radius: 8px;
		padding: 8px 16px;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}
`;

const PopupWindow = (props) => {
	let { title, body, items, buttonText } = props;

	if (!body) body = "What's on your mind?";
	if (!buttonText) buttonText = "Post";

	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSave = () => {
		console.log(inputValue);
		setInputValue("");
	};

	return (
		<Container>
			<div className="popup-content">
				<div className="popup-header">
					<h2>{title}</h2>
					<button className="close" onClick={handleSave}>
						&times;
					</button>
				</div>
				<div className="popup-body">{items}</div>
				<div className="popup-footer">
					<button className="post-button" onClick={handleSave}>
						{buttonText}
					</button>
				</div>
			</div>
		</Container>
	);
};

export default PopupWindow;
