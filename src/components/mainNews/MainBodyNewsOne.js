import React from "react";
import styled from "styled-components";

//Components
import MakeHeadlines from "./components/MakeHeadLines";
import NewsItemContainer from "./components/NewsItemContainer";
import TopHeadLineLeftComponent from "./components/TopHeadLineLeft";
import TopHeadLineRightComponent from "./components/TopHeadlineRight";
import SideBar from "./components/SideBar";

const MainBodyNewsOneContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

const MainHeadlinesStyle = styled.div`
  // padding-left: 15px:
  flex: 4;
  display: flex;
  flex-direction: column;
`;

const MainHeadlinesOneTopBanner = styled.div`
  flex: 1;
  display: flex;
`;

const MainHeadlinesOneBottomBanner = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
`;

const MainHeadlines = () => (
  <MainHeadlinesStyle>
    <MainHeadlinesOneTopBanner>
      <TopHeadLineLeftComponent />
      <TopHeadLineRightComponent />
    </MainHeadlinesOneTopBanner>
    <MainHeadlinesOneBottomBanner>
      {MakeHeadlines(4).map((newsItem) => (
        <NewsItemContainer
          reference={newsItem}
          title={newsItem.title}
          body={newsItem.body}
        />
      ))}
    </MainHeadlinesOneBottomBanner>
  </MainHeadlinesStyle>
);

const MainBodyNewsOne = () => (
  <MainBodyNewsOneContainer>
    <MainHeadlines />
    <SideBar />
  </MainBodyNewsOneContainer>
);

export default MainBodyNewsOne;
