import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import React from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import styled from "styled-components";

const NotFound = () => {
  const FlexedCenterDiv = styled.div`
    display: flex;
    height: 92vh;
    align-items: center;
    justify-content: center;
  `
  return (
    <>
      <Header />
      <FlexedCenterDiv>
        <div style={{textAlign: 'center'}}>
          <FaSkullCrossbones size={40}/>
          <h1 style={{margin:"2px 0 0 0"}}>Page Not Found</h1>
          <p style={{marginTop:"2px"}}>Coming soon...</p>
        </div>
      </FlexedCenterDiv>
    </>
  );
};

export default NotFound;
