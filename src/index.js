require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
//To do : Remove database creds before pushing the code
const mongoUri =
  "mongodb+srv://121212:121212121@cluster0.i83km.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongo Db connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error while connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(3000, () => {
  console.log("Backend Server listening to port 3000");
});
