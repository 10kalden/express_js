const express = require("express");
const port = 3000;
const app = express();

app.get("/about", (req, res) => {
  res.send("This is the about page of the website");
});
app.get("/download", (req, res) => {
  res.send("Click here to download the software");
});
app.get("/documentation", (req, res) => {
  res.send("This is the document page of the website");
});
app.get("/community", (req, res) => {
  res.send("Click here to join the community");
});
app.get("/news", (req, res) => {
  res.send("Read all the latest news on this page");
});

app.listen(port, () => {
  console.log("The server is running on port 3000");
});
