import React from "react";
import styled from "styled-components";

//Images
import userIcon from "../../../../../Images/userIcon.png";

const SignInContainer = styled.div`
  flex: 1;
  height: 40px;
  // background: yellow;
  padding: 0 10px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  border: 0.5px solid lightgrey;
  border-top: 0;
  border-bottom: 0;
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 15px;
    right: -5px;
    width: 8px;
    height: 8px;
    background: #ffffff;
    border-right: 1px solid #cad5e0;
    border-bottom: 1px solid #cad5e0;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    background-color: none;
  }
`;

const UserIconSizing = styled.img`
  height: 20px;
  padding-right: 10px;
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SignIn = styled.span`
  font-size: 14px;
  text-decoration: none;
  color: black;
  // font-weight: bold;
`;

const UserLogo = () => <UserIconSizing src={userIcon} />;

const SignInComponent = () => (
  <SignInContainer>
    <SignInButton as="a" href="#">
      <UserLogo />
      <SignIn>Sign in</SignIn>
    </SignInButton>
  </SignInContainer>
);

export default SignInComponent;
