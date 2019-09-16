import React from "react";
import styled from "styled-components";

//Images
import bellImage from "../../../../../Images/bellImage.png";

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

const pageLinksforMap = [
  "Home",
  "News",
  "Sport",
  "Weather",
  "iPlayer",
  "Sounds",
  "CBBC",
  "More"
];

const Links = () => (
  <PageLinksContainer>
    <Link>
      <BellImageComponent />
    </Link>
    {pageLinksforMap.map((item) => (
      <Link key={item}>{item}</Link>
    ))}
    <LinkMore>More</LinkMore>
  </PageLinksContainer>
);

export default Links;