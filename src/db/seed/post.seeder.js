const { Seeder } = require("mongoose-data-seed");
const Post = require("../models/postModel");
const faker = require("faker");

const data = [
  {
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    body: faker.lorem.paragraphs(10, "\n"),
  },
];

for (let i = 0; i < 10; i++) {
  data.push({
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    body: faker.lorem.paragraphs(10, "\n"),
  });
}

class PostSeeder extends Seeder {
  async shouldRun() {
    return Post.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Post.create(data);
  }
}

module.exports = PostSeeder;
