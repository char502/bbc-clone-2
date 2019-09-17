import React from "react";
import styled from "styled-components";
import faker from "faker";

//Images
import fakeNewsImage from "../../../Images/fakeNewsImage.jpg";
// Image copied from: http://frankhorvat.com/wp-content/uploads/2018/10/fake-news_frank-horvat.jpg

const TopHeadLineRight = styled.div`
  padding: 10px;
  flex 1;
`;

const TopHeadLineRightNewsItemImageContainer = styled.div`
  width: 100%;
  height: 135;
`;

const TopHeadLineRightNewsItemImageStyle = styled.img`
  width: 100%;
  height: 100%;
  flex: 2;
`;

const TopHeadLineRightComponent = () => {
  return (
    <TopHeadLineRight>
      {/* <TopHeadLineRightNewsItemImage /> */}
      <TopHeadLineRightNewsItemImageContainer>
        <TopHeadLineRightNewsItemImageStyle src={fakeNewsImage} />
      </TopHeadLineRightNewsItemImageContainer>

      <h3>{faker.lorem.words()}</h3>
      <h5>metadata</h5>
    </TopHeadLineRight>
  );
};

export default TopHeadLineRightComponent;
