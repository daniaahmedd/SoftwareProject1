const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  next();
});

app.use("/LiveChatsData", productRouter);

const db_name = "Test";
// * Cloud Connection
 const db_url = `mongodb+srv://Mariam:LW7ZrU0N8A25kWqB@cluster0.qebr03m.mongodb.net/Software`;
// * Local connection
//const db_url = `mongodb://127.0.0.1:27017/${db_name}`; // if it gives error try to change the localhost to 127.0.0.1

// ! Mongoose Driver Connection

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(db_url, connectionOptions)
  .then(() => console.log("mongoDB connected"))
  .catch((e) => {
    console.log(e);
  });

app.use(function (req, res, next) {
  return res.status(404).send("404");
});
app.listen(3000, () => console.log("server started"));