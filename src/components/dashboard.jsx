import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "./common/navBar";
import SideBar from "./common/sideBar";
import MainDash from "./dashboard/main";
import NumStat from "./dashboard/numStat";
import Outlets from "./dashboard/outlets";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap; /* wrap children to new line if there isn't enough space */

  @media (max-width: 1000px) {
    & > div:first-child {
      display: none; /* hide sidebar if screen is narrower than 1000px */
    }

    & > div:last-child {
      width: 100%; /* make the dash elements wrapper take up the entire width */
    }
  }
`;

const SidebarWrapper = styled.div`
  width: 20%;
`;

const DashElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #d1d1d1;
  width: 80%;
`;

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | ProInventory";
  }, []);

  const [name, setName] = useState("User 1");

  return (
    <React.Fragment>
      <Container>
        <SidebarWrapper>
          <SideBar user={name} />
        </SidebarWrapper>

        <DashElementsWrapper>
          <NavBar />
          <MainDash />
          <NumStat />
          <Outlets />
        </DashElementsWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
