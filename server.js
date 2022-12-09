const app = require("./app");
const connectDB = require("./db/connectDB");
const { PORT } = require("./config");

(async () => {
  try {
    await connectDB();

    app.listen(PORT || 8001, () => {
      console.log(`Server started on URL http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Server did not start, error: ", err);
    process.exit(1);
  }
})();
