const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const userRoute = require("./src/routes/userRoute");
const categoryRoute = require("./src/routes/categoryRoute");
const colors = require("colors");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");

const app = express();
app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1", userRoute);
app.use("/api/v1", categoryRoute);

app.use((req, res, next) => {
  next(createError(404, "not found"));
});

// all the errors will come here in the end from all the routes
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

dotenv.config({ path: "../server/src/config/.env" });

// listen
app.listen(process.env.PORT, async () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`.bgMagenta
  );
  await dbConnect();
});

module.exports = app;
