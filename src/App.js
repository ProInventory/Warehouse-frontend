import React from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import Status from "./components/status";
import NotFound from "./components/404";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/status" element={<Status />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
