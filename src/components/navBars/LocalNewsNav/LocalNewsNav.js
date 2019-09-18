import React from "react";
import styled from "styled-components";

const NewsLinksLocalContainer = styled.div`
  padding-left: 15px;
  height: 50px;
  display: flex;
  flex: 3;
  align-items: center;
`;

const NavNewsLocalContainer = styled.div`
  width: 100vw;
  height: 44px;
`;

const NavNewsLocalInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const NewsLocalLink = styled.div`
  padding: 0 15px;
  font-size: 16px;
  color: black;
  border-right: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-width: 0;
  }
  border-bottom: 4px solid transparent;
  :hover {
    border-bottom-color: #bb1919;
  }
`;

const mainLocalNewsLinksforMap = [
  "England",
  "N. Ireland",
  "Scotland",
  "Alba",
  "Wales",
  "Cymru",
  "Local News"
];

const NewsLocalLinks = () => (
  <NewsLinksLocalContainer>
    {mainLocalNewsLinksforMap.map((item) => (
      <NewsLocalLink key={item}>{item}</NewsLocalLink>
    ))}
  </NewsLinksLocalContainer>
);

const LocalNewsNav = () => (
  <NavNewsLocalContainer>
    <NavNewsLocalInner>
      <NewsLocalLinks />
    </NavNewsLocalInner>
  </NavNewsLocalContainer>
);

export default LocalNewsNav;
