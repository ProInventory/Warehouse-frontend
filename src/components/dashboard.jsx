import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "./navBar";
import MainDash from "./dashboard/main";
import SideBar from "./sideBar";
import NumStat from "./numStat";

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

    #dashElements {
        overflow: hidden;
        background-color: #d1d1d1;
        display: table-cell;
    }
`;

const Dashboard = () => {
    const [name, setName] = useState("User 1");

    const side = document.querySelector("#root");
    side.style.setProperty("height", "100%");

    return (
        <React.Fragment>
            <Container>
                <div id="parent">
                    <div id="sidebar" style={{ height: "100vh" }}>
                        <SideBar user={name} />
                    </div>

                    <div id="dashElements">
                        <NavBar />
                        <MainDash />
                        <NumStat />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
