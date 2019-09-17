import React from "react";
import styled from "styled-components";
import faker from "faker";

//Components
import MakeHeadlines from "./components/MakeHeadLines";
import NewsItemContainer from "./components/NewsItemContainer";
import TopHeadLineLeftComponent from "./components/TopHeadLineLeft";
import SideBar from "./components/SideBar";

const MainBodyNewsOneContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  display: flex;
  //   padding: 20px;
`;

const MainHeadlinesStyle = styled.div`
  // padding-left: 15px:
  flex: 4;
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
`;

const MainHeadlinesOneTopBanner = styled.div`
  //   margin: 12px 12px 6px 12px;
  background: green;
  border: 0.5px solid black;
  // height: 300px;
  flex: 1;
  display: flex;
`;

// =========== Top Headline Right =====================

const TopHeadLineRight = styled.div`
  padding: 10px;
  flex 1;
`;

const TopHeadLineRightNewsItemImage = styled.div`
  //   width: 240;
  width: 100%;
  height: 135;
  background: grey;
  border: 0.5px solid black;
`;

const TopHeadLineRightComponent = () => {
  return (
    <TopHeadLineRight>
      <TopHeadLineRightNewsItemImage />
      <h3>{faker.lorem.words()}</h3>
      <h5>metadata</h5>
    </TopHeadLineRight>
  );
};

// =========== End of Top Headline Right ===============

const MainHeadlinesOneBottomBanner = styled.div`
  //   margin: 6px 12px 12px 12px;
  padding: 10px;

  background: yellow;
  border: 0.5px solid black;
  // height: 300px;
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
