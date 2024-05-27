const express = require("express");
const cors = require("cors");
// const path = require('path');
// const fs = require('fs');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const userRoutes = require("./src/routes/userRoute");
const categoryRoutes = require("./src/routes/categoryRoute");
const subCategoryRoutes = require('./src/routes/subCategoryRoute');
const productRoutes = require('./src/routes/productRoute');
const cartRoutes = require('./src/routes/cartRoute');
const wishlistRoutes = require('./src/routes/wishlistRoute');

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
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Ensure upload folder exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }



app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", subCategoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", wishlistRoutes);










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

module.exports = app;