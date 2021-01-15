require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
//To do : Remove database creds before pushing the code
const mongoUri =
  "mongodb+srv://1121212:12121212@cluster0.i83km.mongodb.net/trackdb?retryWrites=true&w=majority";
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

app.get("/", requireAuth, (req, res) => {
  res.send(`your email ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Backend Server listening to port 3000");
});
