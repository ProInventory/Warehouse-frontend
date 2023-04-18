import React, { Fragment, useState } from "react";
import styled from "styled-components";

import PopupWindow from "../common/popupWindow";

const Container = styled.div`
	.table {
		width: 80%;
		margin-left: 10%;
	}

	.addNew {
		possition: absolute;
		margin-left: 80%;
	}

	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup {
		background-color: white;
		border: 1px solid #dddfe2;
		border-radius: 8px;
		width: 500px;
		height: 400px;
		position: relative;
		overflow: hidden;
	}

	.close {
		position: absolute;
		top: 8px;
		right: 16px;
		font-size: 24px;
		font-weight: bold;
		color: #666;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

const PopupWindowContainer = styled.div`
	.inputLabel {
		display: block;
		font-size: 15px;
		font-weight: 700;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.inputField {
		display: block;
		width: 100%;
		padding: 8px 10px;
		font-size: 14px;
		border-radius: 4px;
		border: 1px solid #ddd;
	}
`;

const StatusPanel = () => {
	const [showPopup, setShowPopup] = useState(false);

	const handleButtonClick = () => {
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	const test = (
		<Fragment>
			<label className="inputLabel" htmlFor="inputField">
				Name
			</label>

			<input
				className="inputField"
				type="text"
				id="inputField"
				name="inputField"
			/>

			<label className="inputLabel" htmlFor="inputField">
				Price
			</label>

			<input
				className="inputField"
				type="text"
				id="inputField"
				name="inputField"
			/>

			<label className="inputLabel" htmlFor="inputField">
				Stock count
			</label>

			<input
				className="inputField"
				type="text"
				id="inputField"
				name="inputField"
			/>
		</Fragment>
	);

	return (
		<React.Fragment>
			<Container>
				<div className="status">
					<h1>Status</h1>
					<div className="addNew">
						<button
							onClick={handleButtonClick}
							type="button"
							className="btn btn-primary"
						>
							Add new
						</button>
						{showPopup && (
							<div className="popup-overlay">
								<div className="popup">
									<PopupWindowContainer>
										<PopupWindow
											title={"Add item"}
											buttonText={"Add"}
											items={test}
										/>
									</PopupWindowContainer>
									<button
										className="close"
										onClick={handleClosePopup}
									>
										&times;
									</button>
								</div>
							</div>
						)}
					</div>

					<div className="table m-4">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default StatusPanel;
