import React from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import NumStat from "./components/numStat";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/numstat" element={<NumStat />} />
			</Routes>
		</div>
	);
}

export default App;
