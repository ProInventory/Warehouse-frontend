import React, { useState } from "react";
import styled from "styled-components";

import SideBar from "./sideBar";

const Container = styled.div`
    body {
        background-color: #a6a6a6;
    }

    .sideBar {
        float: left;
        width: 20%;
    }

    .dashboard {
        float: left;
        width: 80%;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .welcome {
        font-size: 18px;
    }

    .name {
        display: inline;
        color: #ab47bc;
    }
`;

const Dashboard = () => {
    const [name, setName] = useState("User 1");

    return (
        <React.Fragment>
            <Container>
                <div className="row">
                    <div className="sideBar">
                        {" "}
                        <SideBar />
                    </div>
                    <div className="dashboard">
                        <div className="welcome">
                            Welcome <div class="name">{name}</div>,
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
