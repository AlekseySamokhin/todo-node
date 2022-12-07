require("dotenv").config({ path: ".env" });

const URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

module.exports = {
  URL,
  PORT,
};
