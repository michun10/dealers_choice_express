const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.status(200);
  res.send(`<h1>Welcome to the main page</h1>`);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is successfully running and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred: ", error);
  }
});
