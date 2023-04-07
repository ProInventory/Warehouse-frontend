import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "./sideBar";
import Graph from "./dashboard/graph";

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

    .welcome {
        padding: 35px;
        font-family: "Rubik", sans-serif;
    }

    .welcomeHead {
        font-size: 25px;
    }

    .welcomeBody {
        font-size: 18px;
    }

    .name {
        display: inline;
        color: #ab47bc;
    }

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

const Dashboard = () => {
    const [name, setName] = useState("User 1");

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
                        <div className="welcome">
                            <div className="welcomeHead">
                                Welcome <div class="name">{name}</div>,
                            </div>
                            <div className="welcomeBody">
                                Welcome back, Have a great day!
                            </div>
                        </div>

                        <div className="graphContainer">
                            <div className="graph">
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
