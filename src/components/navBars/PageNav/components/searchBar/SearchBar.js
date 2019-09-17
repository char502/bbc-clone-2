import React from "react";
import styled from "styled-components";

// Images
import magnifyingGlass from "../../../../../Images/magnifyingGlass.png";

const SearchBarContainer = styled.div`
  flex: 1;
  height: 40px;
  // background: yellow;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border: solid lightgrey;
  border-width 0 0 0 0.5px;
  display: inline-block;
`;

const SearchBarInput = styled.input`
  background-color: #e4e4e4;
  border: solid white;
  padding: 5px;
  // display: inline-block;
  ::placeholder {
    color: black;
    font-weight: bold;
  }
`;

// const SearchBarButton = styled.a`

// `

// ====================== Poss Help =================================
/* <div class="search-container">
  <input type="text" placeholder="Search">
    <a class="search-button" href="#">
      <img src="https://static.bbci.co.uk/frameworks/barlesque/2.83.4/orb/4/img/orb-search-dark.png" alt="Search">
            </a>
          </div> */

// ========================================================
// const SignInButton = styled.button`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
// `;

// const SignIn = styled.span`
//   font-size: 14px;
//   text-decoration: none;
// `;

// const UserLogo = () => <UserIconSizing src={userIcon} />;

// const SignInComponent = () => (
//   <SignInContainer>
//     <SignInButton as="a" href="#">
//       <UserLogo />
//       <SignIn>Sign in</SignIn>
//     </SignInButton>
//   </SignInContainer>
// );

// export default SignInComponent;

// ========================================================

const MagnifyingGlass = styled.img`
  width: 30px;
  height: 24px;
  display: inline-block;
  background: transparent;
`;

const SearchBar = () => (
  <SearchBarContainer>
    <form action="Submit">
      <div>
        <SearchBarInput type="text" placeholder="Search" />
        {/* <a href="#">
          <MagnifyingGlass src={magnifyingGlass} />
        </a> */}
      </div>
      {/* <button>Img</button> */}
    </form>
  </SearchBarContainer>
);

export default SearchBar;
