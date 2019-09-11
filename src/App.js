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
  height: 50px;
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
  width: 100px;
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
  height: 50px;
  // background: yellow;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const UserIconSizing = styled.img`
  width: 25px;
  height: 20px;
  padding-right: 10px;
`;

const SignIn = styled.span`
  font-size: 16px;
  text-decoration: none;
  // display: flex;
  // flex-wrap: none;
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
  height: 50px;
  // background: blue;
  display: flex;
  flex: 3;
  align-items: center;
`;

const Link = styled.div`
  padding: 0 15px;
  font-size: 16px;
  color: black;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
`;

const BellImageSizing = styled.img`
  width: 30px;
  height: 25px;
  margin-top: 5px;
`;

const BellImageComponent = () => <BellImageSizing src={bellImage} />;

const Links = () => (
  <PageLinksContainer>
    <Link>
      <BellImageComponent />
    </Link>
    <Link>News</Link>
    <Link>Sport</Link>
    <Link>Weather</Link>
    <Link>iPlayer</Link>
    <Link>Sounds</Link>
    <Link>CBBC</Link>
    <Link>More</Link>
  </PageLinksContainer>
);

//=============== Search Bar ===============
const SearchBarContainer = styled.div`
  flex: 1;
  height: 50px;
  // background: yellow;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const SearchBarInput = styled.input`
  color: black;
  background-color: #e4e4e4;
`;

const SearchBarForm = () => {
  return (
    <div>
      <form action="Submit">
        <input type="text" placeholder="Search" />
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

//=============== Nav News Container ===============
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
  padding: 0 16px;
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
  padding: 0 15px;
  font-size: 16px;
  color: white;
  border-right: 1px solid #ffffff;
  display: flex;
  align-items: center;
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

//=============== Main App ===============
function App() {
  return (
    <div className="App">
      <Nav />
      <NavNews />
    </div>
  );
}

export default App;
