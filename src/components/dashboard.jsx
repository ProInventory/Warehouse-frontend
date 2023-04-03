import React, { Component } from "react";
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

class Dashboard extends Component {
    state = {
        name: "User 1",
    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div class="row">
                        <div class="sideBar">
                            {" "}
                            <SideBar />
                        </div>
                        <div class="dashboard">
                            <div class="welcome">
                                Welcome{" "}
                                <div class="name">{this.state.name}</div>,
                            </div>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Dashboard;
