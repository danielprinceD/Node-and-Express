const express = require("express");
const path = require("path");
const app = express();

//Setup Static and middleware
app.use(express.static("./HTML"));

const homepage = path.resolve(__dirname, "./HTML/demo.html");

// app.get("/", (req, res) => {
//   console.log(req);
//   res.status(200).send("home");
// });

app.get("/", (req, res) => {
  res.sendFile(homepage);
  console.log(req.url);
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000);
