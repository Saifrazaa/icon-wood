import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { colors, Media } from "./index";
const CompanyLogo = () => {
  const history = useHistory();
  return (
    <Logo onClick={() => history.push("/")} className="logo">
      <h1>IconWood.</h1>
    </Logo>
  );
};
const Logo = styled.div`
  width: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  position: relative;
  z-index: 1;
  h1 {
    font-size: 30px;
    font-family: "gilroysemibold";
    letter-spacing: -2.4px;
    transition: all 0.3s ease;
  }
  &::after {
    position: absolute;
    height: 100%;
    width: 0px;
    background-color: ${colors.secondaryColor};
    content: "";
    transition: all 0.3s ease;
    left: 0px;
    z-index: -1;
  }
  &:hover {
    h1 {
      color: ${colors.primaryColor};
    }
    &::after {
      width: 100%;
    }
  }
  ${Media("xlscreens")} {
    h1 {
      font-size: 2.19vw;
      letter-spacing: -0.17vw;
    }
  }
`;
export default CompanyLogo;
