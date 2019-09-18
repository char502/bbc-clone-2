import React from "react";
import styled from "styled-components";

const NavNewsContainer = styled.div`
  width: 100vw;
  height: 128px;
  background-color: #bb1919;
`;

const NavNewsInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const NewsHeader = styled.div`
  padding-left: 15px;
  font-size: 48px;
  color: white;
`;

const NewsLinksContainer = styled.div`
  padding-left: 15px;
  height: 50px;
  display: flex;
  flex: 3;
  align-items: center;
`;

const NewsLink = styled.div`
  padding: 0 10px;
  font-size: 14px;
  color: white;
  border-right: 0.5px solid rgba(211, 211, 211, 0.7);
  display: flex;
  align-items: center;
  cursor: pointer;
  &:first-child {
    padding-left: 0;
  }
  border-bottom: 4px solid transparent;
  :hover {
    border-bottom-color: white;
  }
  &:last-child {
    border-width: 0;
  }
`;

const mainNewsLinksforMap = [
  "Home",
  "UK",
  "World",
  "Business",
  "Politics",
  "Tech",
  "Science",
  "Health",
  "Family & Education",
  "Entertainment & Arts",
  "Stories",
  "Video & Audio",
  "In Pictures",
  "Newsbeat",
  "More"
];

const NewsLinks = () => (
  <NewsLinksContainer>
    {mainNewsLinksforMap.map((item) => (
      <NewsLink key={item}>{item}</NewsLink>
    ))}
  </NewsLinksContainer>
);

const MainNewsNav = () => (
  <NavNewsContainer>
    <NavNewsInner>
      <div>
        <NewsHeader>NEWS</NewsHeader>
      </div>
      <NewsLinks />
    </NavNewsInner>
  </NavNewsContainer>
);

export default MainNewsNav;
