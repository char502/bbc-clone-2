import React from "react";
import styled from "styled-components";
import faker from "faker";

const SideBarStyle = styled.div`
  // margin: 24px;
  display: flex;
  flex: 1;
  // background: red;
  flex-direction: column;
  // border: 0.5px solid black;
`;

const SideBarNewsItemStyle = styled.div`
  padding: 0 24px;
  border-bottom: 0.5px solid grey;
  flex: 1;
`;

// const titleStyle = styled.h1``

// border - right: solid lightgrey;
// border - width 0 0.5px;
// display: flex;
// align - items: center;

const sideBarMeta = () => {};

// linkItemSideBarStyle = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const linkItemSideBar = () => "Test";
// {
// /* <linkItemSideBarStyle>
// <SideBarMeta />
// </linkItemSideBarStyle> */
// }

const MakeSideBarNewsItem = (amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      title: faker.lorem.words(),
      linkItem: linkItemSideBar()
    });
  }
  return arr;
};

const SideBarNewsItem = (props) => (
  <SideBarNewsItemStyle key={props.reference}>
    <h3>{props.title}</h3>
    <h5>{props.linkItem}</h5>
  </SideBarNewsItemStyle>
);

const SideBar = () => (
  <SideBarStyle>
    {MakeSideBarNewsItem(7).map((sideBarNewsItem) => (
      <SideBarNewsItem
        reference={sideBarNewsItem}
        title={sideBarNewsItem.title}
        linkItem={sideBarNewsItem.linkItem}
      />
    ))}
  </SideBarStyle>
);

export default SideBar;
