import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	.main {
		display: flex;
		flex-direction: column;
		align-items: left;
		margin: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		margin: 20px;
	}

	label {
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 5px;
	}

	input {
		padding: 0.4%;
		border-radius: 3px;
		border: 1px solid gray;
		margin-bottom: 0.1%;
		width: 100%;
		font-size: 16px;
	}

	button {
		padding: 10px 20px;
		border-radius: 3px;
		border: none;
		background-color: #4caf50;
		color: white;
		font-size: 16px;
		cursor: pointer;
		margin-top: 20px;
	}
`;

const Main = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
	};

	return (
		<Container>
			<div className="main">
				<form
					onSubmit={handleSubmit}
					className="form-inline justify-content-end"
				>
					<div className="form-group mb-3 mr-3">
						<label htmlFor="name" className="mr-2">
							Name:
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							className="form-control w-80"
						/>
					</div>

					<div className="form-group mb-3 mr-3">
						<label htmlFor="email" className="mr-2">
							Email:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							className="form-control w-80"
						/>
					</div>

					<div className="form-group mb-3 mr-3">
						<label htmlFor="password" className="mr-2">
							Password:
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
							className="form-control w-80"
						/>
					</div>

					<button type="submit" className="btn btn-primary mb-3">
						Save Changes
					</button>
				</form>
			</div>
		</Container>
	);
};

export default Main;
