const app = require('./app');
const colors = require("colors");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");



dotenv.config({ path: "../server/src/config/.env" });

// listen
app.listen(process.env.PORT, async () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`.bgMagenta
  );
  await dbConnect();
});

module.exports = app;
