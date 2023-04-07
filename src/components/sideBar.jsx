import React from "react";
import styled from "styled-components";

const logo = require("./images/logo.png");

const Container = styled.div`
    .side {
        background-color: #e8e8e8;
    }

    .logoImage {
        display: flex;
        justify-content: center;
    }

    .logoImage img {
        padding-top: 30px;
        padding-left: 5%;
        padding-right: 5%;
        width: 90%;
    }
`;

const SideBar = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="side" style={{ height: "100vh" }}>
                    <div className="logoImage">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default SideBar;
