import faker from "faker";

// Generates the text in the 4 x news items below the main headline
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
