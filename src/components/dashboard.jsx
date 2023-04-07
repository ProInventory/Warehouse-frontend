import React from "react";
import styled from "styled-components";

import MainDash from "./dashboard/main";
import SideBar from "./sideBar";

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
        background-color: #d1d1d1;
        display: table-cell;
        width: 80%;
    }
`;

const Dashboard = () => {
    const side = document.querySelector("#root");
    side.style.setProperty("height", "100%");

    return (
        <React.Fragment>
            <Container>
                <div id="parent">
                    <div id="sidebar" style={{ height: "100vh" }}>
                        <SideBar />
                    </div>

                    <div id="dashElements">
                        <MainDash />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
