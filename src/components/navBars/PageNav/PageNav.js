import React from "react";
import styled from "styled-components";

//components
import Logo from "./components/logo/Logo";
import SignInComponent from "./components/signIn/SignIn";
import Links from "./components/links/Links";
import SearchBar from "./components/searchBar/SearchBar";

// Images
// import BBCLogo from "./Images/BBCLogo.png";
// import userIcon from "./Images/userIcon.png";
// import bellImage from "./Images/bellImage.png";
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
// const LogoContainer = styled.div`
//   flex: 1;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   padding-left: 15px;
// `;

// const BBCLogoSizing = styled.img`
//   width: 85px;
//   height: 24px;
// `;

// const Logo = () => (
//   <LogoContainer>
//     <BBCLogoSizing src={BBCLogo} />
//   </LogoContainer>
// );

//=============== Sign In ===============
// const SignInContainer = styled.div`
//   flex: 1;
//   height: 40px;
//   // background: yellow;
//   padding: 0 10px;
//   display: flex;
//   align-items: center;
//   margin-right: 5px;
//   // flex-wrap: nowrap;
//   border: 0.5px solid lightgrey;
//   border-top: 0;
//   border-bottom: 0;
// `;

// const UserIconSizing = styled.img`
//   height: 20px;
//   padding-right: 10px;
// `;

// const SignIn = styled.span`
//   font-size: 14px;
//   text-decoration: none;
//   margin-bottom: 20px;
//   // display: flex;
//   // flex-wrap: inherit;
// `;

// const UserLogo = () => <UserIconSizing src={userIcon} />;

// const SignInComponent = () => (
//   <SignInContainer>
//     <a href="#">
//       <UserLogo />
//       <SignIn>Sign in</SignIn>
//     </a>
//     {/* <UserLogo />
//     <button>Sign in</button> */}
//   </SignInContainer>
// );

//=============== Page Links ===============
// const PageLinksContainer = styled.div`
//   height: 40px;
//   // background: blue;
//   display: flex;
//   // margin: 0 auto;
//   // padding: 0 16px;
//   flex: 3;
//   align-items: center;
//   margin-right: 65px;
// `;

// const Link = styled.div`
//   // padding: 0 15px;
//   padding: 10px 15px 10px 15px;
//   font-size: 14px;
//   font-weight: bold;
//   color: #505050;
//   border-right: solid lightgrey;
//   border-width 0 0.5px;
//   display: flex;
//   align-items: center;

// `;

// const LinkMore = styled.div`
//   padding: 10px 15px 10px 15px;
//   // margin-right: 10px;
//   color: #505050;
//   border: solid lightgrey;
//   font-size: 14px;
//   font-weight: bold;
//   border-width 0 0.5px 0 0;

// `;

// const BellImageSizing = styled.img`
//   width: 30px;
//   height: 25px;
//   margin: -3px;
//   // margin-top: 5px;
// `;

// const BellImageComponent = () => <BellImageSizing src={bellImage} />;

// const pageLinksforMap = [
//   "Home",
//   "News",
//   "Sport",
//   "Weather",
//   "iPlayer",
//   "Sounds",
//   "CBBC",
//   "More"
// ];

// const Links = () => (
//   <PageLinksContainer>
//     <Link>
//       <BellImageComponent />
//     </Link>
//     {pageLinksforMap.map((item) => (
//       <Link key={item}>{item}</Link>
//     ))}
//     <LinkMore>More</LinkMore>
//   </PageLinksContainer>
// );

//=============== Search Bar ===============
// const SearchBarContainer = styled.div`
//   flex: 1;
//   height: 40px;
//   // background: yellow;
//   padding: 0 10px;
//   display: flex;
//   align-items: center;
//   border: solid lightgrey;
//   border-width 0 0 0 0.5px;
// `;

// const SearchBarInput = styled.input`
//   background-color: #e4e4e4;
//   border: solid white;
//   padding: 5px;
//   ::placeholder {
//     color: black;
//     font-weight: bold;
//   }
// `;

// const SearchBarForm = () => {
//   return (
//     <div>
//       <form action="Submit">
//         <SearchBarInput type="text" placeholder="Search" />
//         {/* <button>Img</button> */}
//       </form>
//     </div>
//   );
// };

// const SearchBar = () => (
//   <SearchBarContainer>
//     <SearchBarForm />
//   </SearchBarContainer>
// );

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
