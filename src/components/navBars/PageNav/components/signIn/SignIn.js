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
  // flex-wrap: nowrap;
  border: 0.5px solid lightgrey;
  border-top: 0;
  border-bottom: 0;
`;

const UserIconSizing = styled.img`
  height: 20px;
  padding-right: 10px;
`;

const SignIn = styled.span`
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 20px;
  // display: flex;
  // flex-wrap: inherit;
`;

const UserLogo = () => <UserIconSizing src={userIcon} />;

const SignInComponent = () => (
  <SignInContainer>
    <a href="#">
      <UserLogo />
      <SignIn>Sign in</SignIn>
    </a>
    {/* <UserLogo />
    <button>Sign in</button> */}
  </SignInContainer>
);

export default SignInComponent;
