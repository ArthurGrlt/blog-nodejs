const mongoose = require("mongoose");
const PostSeeder = require("./src/db/seed/post.seeder");
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/blog";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = { PostSeeder };
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {
  seedersList,
  connect,
  dropdb,
};
