const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const projectRoute = require("./routes/projects");
const clientRoute = require("./routes/clients");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json()); // reqをjsonで記述することを宣言

const PORT = 5000;

app.use("/api/v1/users", userRoute);
app.use("/api/v1/projects", projectRoute);
app.use("/api/v1/clients", clientRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT || PORT, console.log("サーバーが起動しました"));
  } catch (err) {
    console.log(err);
  }
};

start();
