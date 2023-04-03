import React from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login";
import Dashboard from "./components/dashboard";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
