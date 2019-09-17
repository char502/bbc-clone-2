import React from "react";
import styled from "styled-components";

const NewsItemImg = styled.img`
  width: 100%
  height: 30%;
  background: LightGray;

`;

const NewsItem = styled.div`
  padding: 10px;
  width: calc(25% - 10px);
`;

const NewsItemContainer = (props) => (
  <NewsItem key={props.reference}>
    <NewsItemImg />
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </NewsItem>
);

export default NewsItemContainer;
