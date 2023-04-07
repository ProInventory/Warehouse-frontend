import React from "react";
import styled from "styled-components";

const Container = styled.div`
    .side {
        background-color: turquoise;
    }
`;

const SideBar = () => {
    return (
        <React.Fragment>
            <Container>
                <div class="side" style={{ height: "100vh" }}>
                    <h1>Side Bar</h1>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default SideBar;
