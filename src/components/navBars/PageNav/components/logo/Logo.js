import React from "react";
import styled from "styled-components";

//Images
import BBCLogo from "../../../../../Images/BBCLogo.png";

const LogoContainer = styled.div`
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const BBCLogoSizing = styled.img`
  width: 85px;
  height: 24px;
`;

const Logo = () => (
  <LogoContainer>
    <BBCLogoSizing src={BBCLogo} />
  </LogoContainer>
);

export default Logo;
