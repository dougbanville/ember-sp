import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  title: faker.random.word,
  description: faker.random.words,
  picture: "null",
  comments: faker.random.number,
  dateCreated: faker.date.past
});
