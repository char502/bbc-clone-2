import React from "react";
import styled from "styled-components";
import faker from "faker";

//Components
import PageNav from "../src/components/navBars/PageNav/PageNav";

// import './App.css';

//=============== Nav News ===============
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
  // padding: 0 16px;
  // display: flex;
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
  // background: blue;
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
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-width: 0;
  }
  border-bottom: 4px solid transparent;
  :hover {
    border-bottom-color: white;
    // background-size: 4px 50px;
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

//=============== Nav News Local ===============
const NavNewsLocalContainer = styled.div`
  width: 100vw;
  height: 44px;
`;

const NavNewsLocalInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  // padding: 0 16px;
  // display: flex;
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
  <NewsLinksContainer>
    {mainLocalNewsLinksforMap.map((item) => (
      <NewsLocalLink key={item}>{item}</NewsLocalLink>
    ))}
  </NewsLinksContainer>
);

const LocalNewsNav = () => (
  <NavNewsLocalContainer>
    <NavNewsLocalInner>
      <NewsLocalLinks />
    </NavNewsLocalInner>
  </NavNewsLocalContainer>
);

//=============== Main Body News One ===============
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

const SideBarStyle = styled.div`
  // margin: 24px;
  display: flex;
  flex: 1;
  // background: red;
  flex-direction: column;
  // border: 0.5px solid black;
`;

const SideBarNewsItemStyle = styled.div`
  padding: 0 24px;
  border: 0.5px solid black;
  flex: 1;
`;

// const titleStyle = styled.h1``

// border - right: solid lightgrey;
// border - width 0 0.5px;
// display: flex;
// align - items: center;

const sideBarMeta = () => {};

// linkItemSideBarStyle = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const linkItemSideBar = () => "Test";
// {
// /* <linkItemSideBarStyle>
// <SideBarMeta />
// </linkItemSideBarStyle> */
// }

const MakeSideBarNewsItem = (amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      title: faker.lorem.words(),
      linkItem: linkItemSideBar()
    });
  }
  return arr;
};

const SideBarNewsItem = (props) => (
  <SideBarNewsItemStyle key={props.reference}>
    <h3>{props.title}</h3>
    <h5>{props.linkItem}</h5>
  </SideBarNewsItemStyle>
);

const SideBar = () => (
  <SideBarStyle>
    {MakeSideBarNewsItem(7).map((sideBarNewsItem) => (
      <SideBarNewsItem
        reference={sideBarNewsItem}
        title={sideBarNewsItem.title}
        linkItem={sideBarNewsItem.linkItem}
      />
    ))}
  </SideBarStyle>
);

const MainBodyNewsOne = () => (
  <MainBodyNewsOneContainer>
    <MainHeadlines />
    <SideBar />
  </MainBodyNewsOneContainer>
);

//=============== Main App ===============

function App() {
  return (
    <div className="App">
      <PageNav />
      <MainNewsNav />
      <LocalNewsNav />
      <MainBodyNewsOne />
    </div>
  );
}

export default App;
