import React from "react";
import styled from "styled-components";
import faker from "faker";

//Images
import fakeNewsImage from "../../../Images/fakeNewsImage.jpg";
// Image copied from: http://frankhorvat.com/wp-content/uploads/2018/10/fake-news_frank-horvat.jpg

const TopHeadlineLeft = styled.div`
  flex: 3;
  display: flex;
`;

const TopHeadlineLeftTitleContainer = styled.div`
  padding: 10px;
`;

const TopHeadlineLeftTitle = styled.h1`
  margin: 0;
  padding: 0 0 20px 0;
`;

const TopHeadlineLeftTextContainer = styled.div`
  flex: 1;
  padding: 5px;
`;

const TopHeadlineLeftImageContainer = styled.div`
  flex: 2;
  padding: 10px;
`;

const TopHeadlineLeftText = () => {
  return (
    <TopHeadlineLeftTitleContainer>
      <TopHeadlineLeftTitle>{faker.lorem.words()}</TopHeadlineLeftTitle>
      <TopHeadlineLeftTextContainer>
        {faker.lorem.sentences()}
      </TopHeadlineLeftTextContainer>
    </TopHeadlineLeftTitleContainer>
  );
};

const TopHeadLineLeftNewsItemImageStyle = styled.img`
    display: flex
    width: 100%;
    height: 100%;
    flex: 2
    padding: 0 5px 0 20px;
`;

const Metadata = styled.div`
  padding-left: 15px;
`;

const TopHeadLineLeftComponent = () => {
  return (
    <TopHeadlineLeft>
      <TopHeadlineLeftTextContainer>
        <TopHeadlineLeftText />
        <Metadata>
          <h5>metadata</h5>
        </Metadata>
      </TopHeadlineLeftTextContainer>

      <TopHeadlineLeftImageContainer>
        <TopHeadLineLeftNewsItemImageStyle src={fakeNewsImage} />
      </TopHeadlineLeftImageContainer>
    </TopHeadlineLeft>
  );
};

export default TopHeadLineLeftComponent;
