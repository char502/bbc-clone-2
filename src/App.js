import React from "react";
import styled from "styled-components";

// import './App.css';

// Images
import BBCLogo from "./Images/BBCLogo.png";
import userIcon from "./Images/userIcon.png";
import bellImage from "./Images/bellImage.png";
// import magnifyingGlass from "./Images/magnifyingGlass.png";

// =============== First Nav ===============
const NavContainer = styled.div`
  width: 100vw;
  height: 40px;
  // background: green;
`;

const NavInner = styled.div`
  width: 100%;
  height: 100%;
  // background: red;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//=============== Logo ===============
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

//=============== Sign In ===============
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

//=============== Page Links ===============
const PageLinksContainer = styled.div`
  height: 40px;
  // background: blue;
  display: flex;
  // margin: 0 auto;
  // padding: 0 16px;
  flex: 3;
  align-items: center;
  margin-right: 65px;
`;

const Link = styled.div`
  // padding: 0 15px;
  padding: 10px 15px 10px 15px;
  font-size: 14px;
  font-weight: bold;
  color: #505050;
  border-right: solid lightgrey;
  border-width 0 0.5px;
  display: flex;
  align-items: center;
  
`;

const LinkMore = styled.div`
  padding: 10px 15px 10px 15px;
  // margin-right: 10px;
  color: #505050;
  border: solid lightgrey;
  font-size: 14px;
  font-weight: bold;
  border-width 0 0.5px 0 0;
  
`;

const BellImageSizing = styled.img`
  width: 30px;
  height: 25px;
  margin: -3px;
  // margin-top: 5px;
`;

const BellImageComponent = () => <BellImageSizing src={bellImage} />;

const Links = () => (
  <PageLinksContainer>
    <Link>
      <BellImageComponent />
    </Link>
    <Link>Home</Link>
    <Link>News</Link>
    <Link>Sport</Link>
    <Link>Weather</Link>
    <Link>iPlayer</Link>
    <Link>Sounds</Link>
    <Link>CBBC</Link>
    <LinkMore>More</LinkMore>
  </PageLinksContainer>
);

//=============== Search Bar ===============
const SearchBarContainer = styled.div`
  flex: 1;
  height: 40px;
  // background: yellow;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border: solid lightgrey;
  border-width 0 0 0 0.5px;
`;

const SearchBarInput = styled.input`
  color: black;
  background-color: #e4e4e4;
  border: solid white;
  padding: 5px;
`;

const SearchBarForm = () => {
  return (
    <div>
      <form action="Submit">
        <SearchBarInput type="text" placeholder="Search" />
        {/* <button>Img</button> */}
      </form>
    </div>
  );
};

const SearchBar = () => (
  <SearchBarContainer>
    <SearchBarForm />
  </SearchBarContainer>
);

const Nav = () => (
  <NavContainer>
    <NavInner>
      <Logo />
      <SignInComponent />
      <Links />
      <SearchBar />
    </NavInner>
  </NavContainer>
);

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
`;

const NewsLinks = () => (
  <NewsLinksContainer>
    <NewsLink>Home</NewsLink>
    <NewsLink>UK</NewsLink>
    <NewsLink>World</NewsLink>
    <NewsLink>Business</NewsLink>
    <NewsLink>Politics</NewsLink>
    <NewsLink>Tech</NewsLink>
    <NewsLink>Science</NewsLink>
    <NewsLink>Health</NewsLink>
    <NewsLink>Family & Education</NewsLink>
    <NewsLink>Entertainment & Arts</NewsLink>
    <NewsLink>Stories</NewsLink>
    <NewsLink>Video & Audio</NewsLink>
    <NewsLink>In Pictures</NewsLink>
    <NewsLink>Newsbeat</NewsLink>
    <NewsLink>More</NewsLink>
  </NewsLinksContainer>
);

const NavNews = () => (
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
`;

const NewsLocalLinks = () => (
  <NewsLinksContainer>
    <NewsLocalLink>England</NewsLocalLink>
    <NewsLocalLink>N. Ireland</NewsLocalLink>
    <NewsLocalLink>Scotland</NewsLocalLink>
    <NewsLocalLink>Alba</NewsLocalLink>
    <NewsLocalLink>Wales</NewsLocalLink>
    <NewsLocalLink>Cymru</NewsLocalLink>
    <NewsLocalLink>Local News</NewsLocalLink>
  </NewsLinksContainer>
);

const NavNewsLocal = () => (
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
  // height: 1000px
  height: auto;
  margin: 0 auto;
  display: flex;
  // justify-content: space-between;
`;

const MainHeadlinesStyle = styled.div`
  // padding-left: 15px:
  flex: 4;
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
`;

// const HeadLineItem = styled.div`
//   padding-left: 20px;
// `;

const MainHeadlinesOneTopBanner = styled.div`
  margin: 12px;
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
  padding: 10px;
  margin: 12px;
  background: yellow;
  border: 0.5px solid black;
  // height: 300px;
  flex: 1;
  display: flex;
`;

const NewsItemImage = styled.image`
  width: 100%
  height: 10px;
  background: LightGray;

`;

const NewsItem = styled.div`
  padding: 5px;
  width: calc(25% - 10px);
`;

const NewsItemContainer = () => (
  <NewsItem>
    <NewsItemImage />
    <h5>News Headline</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra
      aliquet eget. Sed risus ultricies tristique nulla aliquet enim.
    </p>
  </NewsItem>
);

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
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra
        aliquet eget. Sed risus ultricies tristique nulla aliquet enim. Eu
        scelerisque felis imperdiet proin. Dolor sit amet consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem
        viverra aliquet eget. Sed risus ultricies tristique nulla aliquet enim.
        Eu scelerisque felis imperdiet proin. Dolor sit amet consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Enim ut sem viverra aliquet eget. Sed risus ultricies tristique nulla
        aliquet enim. Eu scelerisque felis imperdiet proin. Dolor sit amet
        consectetur adipiscing elit.
      </p> */}
    </MainHeadlinesOneTopBanner>
    <MainHeadlinesOneBottomBanner>
      <NewsItemContainer />
      <NewsItemContainer />
      <NewsItemContainer />
      <NewsItemContainer />
    </MainHeadlinesOneBottomBanner>
  </MainHeadlinesStyle>
);

const SideBarStyle = styled.div`
  // margin: 24px;
  display: flex;
  flex: 1;
  bakcground: red;
  flex-direction: column;
  border: 0.5px solid black;
`;

const SideBarNewsItem = styled.div`
  padding-left: 24px;
  border: 0.5px solid black;
`;

const SideBar = () => (
  <SideBarStyle>
    <SideBarNewsItem>
      <h5>Side News Item 1</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 2</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 3</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 4</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 5</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 6</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
    <SideBarNewsItem>
      <h5>Side News Item 7</h5>
      <p>Lorem ipsum dolor sit amet</p>
    </SideBarNewsItem>
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
      <Nav />
      <NavNews />
      <NavNewsLocal />
      <MainBodyNewsOne />
    </div>
  );
}

export default App;
