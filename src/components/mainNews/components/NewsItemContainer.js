import React from "react";
import styled from "styled-components";

//Images
import fakeNewsImage from "../../../Images/fakeNewsImage.jpg";
// Image copied from: http://frankhorvat.com/wp-content/uploads/2018/10/fake-news_frank-horvat.jpg

// controls the styling for the 4 x news items below the main headline

const NewsItemImg = styled.img`
  width: 100%
  height: 30%;
`;

const NewsItem = styled.div`
  padding: 10px;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  justify-content: normal;
  // width: calc(25% - 10px);
`;

const NewsItemContainer = (props) => (
  <NewsItem key={props.reference}>
    <NewsItemImg src={fakeNewsImage} />
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    <h5>metadata</h5>
  </NewsItem>
);

export default NewsItemContainer;
