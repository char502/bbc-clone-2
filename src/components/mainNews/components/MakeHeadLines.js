import faker from "faker";

const MakeHeadlines = (amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      title: faker.lorem.words(),
      body: faker.lorem.sentences()
    });
  }
  return arr;
};

export default MakeHeadlines;
