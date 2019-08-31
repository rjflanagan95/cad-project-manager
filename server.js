const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();


// Mongo DB
const db = require("./models");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/taskapp";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Express
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./routes")(router, db);
app.use(routes);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
