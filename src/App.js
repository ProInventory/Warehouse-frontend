import React from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/login";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
