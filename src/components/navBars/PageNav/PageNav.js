import React from "react";
import styled from "styled-components";

//components
import Logo from "./components/logo/Logo";
import SignInComponent from "./components/signIn/SignIn";
import Links from "./components/links/Links";
import SearchBar from "./components/searchBar/SearchBar";

const NavContainer = styled.div`
  width: 100vw;
  height: 40px;
`;

const NavInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PageNav = () => (
  <NavContainer>
    <NavInner>
      <Logo />
      <SignInComponent />
      <Links />
      <SearchBar />
    </NavInner>
  </NavContainer>
);

export default PageNav;
