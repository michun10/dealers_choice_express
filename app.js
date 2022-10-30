const express = require("express");
const morgan = require("morgan");
const playersBank = require("./playersBank");
const playerList = require("./views/playerList");
const playerInfo = require("./views/playerInfo");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const players = playersBank.getData();
  res.send(playerList(players));
});

app.get("/:position", (req, res) => {
  const position = req.params.position;
  const player = playersBank.find(position);
  const info = playerInfo(player);
  res.send(info);
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
