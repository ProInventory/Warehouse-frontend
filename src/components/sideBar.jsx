import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCubesStacked,
    faChartSimple,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";

const logo = require("./images/logo.png");
const pattern = require("./images/pattern.png");

const Container = styled.div`
    * {
        font-family: "Roboto", sans-serif;
    }

    .side {
        background-color: #e8e8e8;
        background-image: url(${pattern});
        background-size: 500px;
        background-position: center;
        background-repeat: repeat;
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

    .sideBar_items {
        position: absolute;
        top: 16%;
        margin-left: 2%;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .sideBar_items div {
        margin-top: 10%;
    }

    .menu_items {
        margin-top: 0%;
        margin-left: 5%;
    }

    table {
        border-collapse: separate;
        border-spacing: 10px;
    }

    .box {
        position: absolute;
        bottom: 0%;
        height: 32%;
        width: 20%;
        max-width: 20%;
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        padding: 10px;
        margin-top: -10px;
        background-color: #b19cd8;
    }

    .box::before {
        content: "?";
        font-size: 40px;
        font-weight: bold;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #b19cd8;
        border: 7px solid white;
    }

    .box_content {
        color: white;
        text-align: center;
        padding-top: 40px;
    }

    .box_content .title {
        font-weight: bold;
        font-size: 1.4rem;
    }

    .box_content .content {
        font-size: 1rem;
        margin-top: 10px;
        margin-left: 12px;
        margin-right: 12px;
    }

    .box_content .button {
        margin-top: 2%;
    }

    .box_content .contact_button {
        border-radius: 20px;
        background-color: #e8e8e8;
        color: black;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
`;

const SideBar = (props) => {
    const { user } = props;

    return (
        <React.Fragment>
            <Container>
                <div className="side" style={{ height: "100vh" }}>
                    <div className="logoImage">
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                <div className="sideBar_items">
                    <div className="menu">
                        QUICK MENU
                        <table className="menu_items">
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faBars} />
                                </td>
                                <td>Dashboard</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faCubesStacked} />
                                </td>
                                <td>Status</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faChartSimple} />
                                </td>
                                <td>Charts</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faTruck} />
                                </td>
                                <td>Deliveries</td>
                            </tr>
                        </table>
                    </div>
                    <div className="settings">SETTINGS</div>
                    <div className="billing">BILLING</div>
                    <div className="products">PRODUCTS</div>
                </div>

                <div className="box">
                    <div className="box_content">
                        <div className="title">Help Center</div>
                        <div className="content">
                            Having trouble {user}? Check out our software guide
                            or contact support for more questions.
                        </div>

                        <div className="button">
                            <button class="contact_button">
                                Go to help center
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default SideBar;
