import React from "react";
import styled from "styled-components";

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
  background-color: #e4e4e4;
  border: solid white;
  padding: 5px;
  ::placeholder {
    color: black;
    font-weight: bold;
  }
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

export default SearchBar;
