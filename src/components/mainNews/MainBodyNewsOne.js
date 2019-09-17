import React from "react";
import styled from "styled-components";
import faker from "faker";

//Components
import SideBar from "./components/SideBar";

const MainBodyNewsOneContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  display: flex;
  padding: 20px;
`;

const MainHeadlinesStyle = styled.div`
  // padding-left: 15px:
  flex: 4;
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
`;

const MainHeadlinesOneTopBanner = styled.div`
  margin: 12px 12px 6px 12px;
  background: green;
  border: 0.5px solid black;
  // height: 300px;
  flex: 1;
  display: flex;
`;

const TopHeadlineLeft = styled.div`
  padding: 10px;
  flex: 3;
`;

const TopHeadLineRight = styled.div`
  padding: 10px;
  flex 1;
`;

const MainHeadlinesOneBottomBanner = styled.div`
  margin: 6px 12px 12px 12px;
  padding: 10px;

  background: yellow;
  border: 0.5px solid black;
  // height: 300px;
  flex: 1;
  display: flex;
`;

const NewsItemImg = styled.image`
  width: 100%
  height: 10px;
  background: LightGray;

`;

const NewsItem = styled.div`
  padding: 5px;
  width: calc(25% - 10px);
`;

const NewsItemContainer = (props) => (
  <NewsItem key={props.reference}>
    <NewsItemImg />
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </NewsItem>
);

const makeHeadlines = (amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      title: faker.lorem.words(),
      body: faker.lorem.sentences()
    });
  }
  return arr;
};

const MainHeadlines = () => (
  <MainHeadlinesStyle>
    <MainHeadlinesOneTopBanner>
      <TopHeadlineLeft>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut
          sem viverra aliquet eget. Sed risus ultricies tristique nulla aliquet
          enim. Eu scelerisque felis imperdiet proin. Dolor sit amet consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Enim ut sem viverra aliquet eget. Sed risus ultricies
          tristique nulla aliquet enim. Eu scelerisque felis imperdiet proin.
          Dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Enim ut sem viverra aliquet eget. Sed
          risus ultricies tristique nulla aliquet enim. Eu scelerisque felis
          imperdiet proin. Dolor sit amet consectetur adipiscing elit.
        </p>
      </TopHeadlineLeft>
      <TopHeadLineRight>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra
        aliquet eget. Sed risus ultricies tristique nulla aliquet enim. Eu
        scelerisque felis imperdiet proin. Dolor sit amet consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem
        viverra aliquet eget.
      </TopHeadLineRight>
    </MainHeadlinesOneTopBanner>
    <MainHeadlinesOneBottomBanner>
      {makeHeadlines(4).map((newsItem) => (
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
