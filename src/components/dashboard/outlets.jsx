import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .center {
    width: clamp(100px, 50%, 200px);
    height: 250px;
    width: 200px;
    background: #e8e8e8;
    border-radius: 25px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease-in-out;
    position: relative;
  }

  .center:hover {
    box-shadow: 0px 2px 10px rgba(128, 0, 128, 0.2);
  }

  .Title {
    position: relative;
    margin: 0px 0px;
    padding: 20px 10px 25px 5px;
    font-size: 24px;
    font-weight: bold;
    color: #6c757d;
    font-family: "Rubik", sans-serif;
  }

  .label-stat {
    position: relative;
    margin: 0px 0px;
    padding: 15px 0px 0px 15px;
    font-size: 24px;
    font-weight: bold;
    color: #6c757d;
    font-family: "Rubik", sans-serif;
  }

  .time-txt {
    font-size: 16px;
    font-weight: bold;
    color: #6c757d;
    font-family: "Rubik", sans-serif;
    padding: 0px 116px 0px 15px;
  }

  .time-txt-sales {
    font-size: 16px;
    font-weight: bold;
    color: #6c757d;
    font-family: "Rubik", sans-serif;
    padding: 40px 0px 0px 15px;
  }

  .time-data {
    font-size: 14px;
    font-weight: regular;
    color: #6c757d;
    font-family: "Rubik", sans-serif;
    padding: 0px 116px 0px 15px;
  }

  .time-data-big {
    font-size: 35px;
    font-weight: 800;
    color: #6c757d;
    font-family: "Rubik";
    padding: 0px 10px 0px 15px;
    position: relative;
    top: -10px;
    transition: color 0.3s ease-in-out;
  }
  .time-data-big:hover {
    color: #00000f;
    transition: color 0.2s ease-in-out;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const NumStat = () => {
  return (
    <div style={{ position: "relative", top: -190, left: 45 }}>
      <React.Fragment>
        <div style={{ display: "flex" }}>
          <Container style={{ marginRight: "20px" }}>
            <label className="Title">My Outlets</label>
            <div className="center">
              <form>
                <div className="txt_field">
                  <label className="label-stat">WIP Store 01</label>
                  <br></br>
                </div>
              </form>
            </div>
          </Container>
          <Container style={{ marginRight: "20px", marginTop: "80px" }}>
            <div className="center">
              <form>
                <div className="txt_field">
                  <label className="label-stat">WIP Store 02</label>
                  <br></br>
                </div>
              </form>
            </div>
          </Container>
          <Container style={{ marginRight: "20px", marginTop: "80px" }}>
            <div className="center">
              <form>
                <div className="txt_field">
                  <label className="label-stat">WIP Store 03</label>
                  <br></br>
                </div>
              </form>
            </div>
          </Container>
          <Container style={{ marginRight: "20px", marginTop: "80px" }}>
            <div className="center">
              <form>
                <div className="txt_field">
                  <label className="label-stat">WIP Store 04</label>
                  <br></br>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </React.Fragment>
    </div>
  );
};

export default NumStat;
