import React from "react";
import styled from "styled-components";

// Images
import magnifyingGlass from "../../../../../Images/greySearchButton3.jpg";

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

const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const SearchBarInput = styled.input`
  background-color: #eaeaea;
  border: solid white;
  padding: 5px;
  ::placeholder {
    color: black;
    font-weight: bold;
  }
`;

const MagnifyingGlass = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchButton = styled.img`
  display: flex;
  align-items: center;
  position: absolute;
  right: 5px;
`;

const SearchBar = () => (
  <SearchBarContainer>
    <SearchBarForm action="Submit">
      <SearchBarInput type="text" placeholder="Search" />
      <SearchButton as="a" href="#">
        <MagnifyingGlass src={magnifyingGlass} />
      </SearchButton>
    </SearchBarForm>
  </SearchBarContainer>
);

export default SearchBar;
