const express = require("express");
const app = express();
const port = 5500;
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const todosRoutes = require("./routes/todosRoutes");
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"));
// app.use(express.static("public"));

app.use("/users", userRoutes);
app.use("/todos", todosRoutes);

// app.get("/", (req, res,next) => {
//   console.log("req.test ", req.test);
//   console.log(`request run on ${new Date()}`);
//   res.send("<h1>from reqeuest handler</h1>");
// });

// app.get("/image", (req, res) => {
//   const imagePath = path.join(__dirname, "nature.jpg");
//   res.sendFile(imagePath);
// }); // handler
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log(`somehting went wrong with db ${err}`));

app.use((err, req, res, next) => {
  const statusCode = err?.statusCode || 500;
  res.status(statusCode).send({
    statusCode,
    message: err?.message || "internal server error",
    errors: err?.errors || [],
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
