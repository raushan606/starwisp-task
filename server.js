const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//* PORT
const PORT = process.env.PORT || 5000;

const corsOption = {
  origin: "http://localhost:5001",
};
app.use(cors(corsOption));

//* BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome " });
});

app.listen(PORT, () => {
  console.log(`Server is up on port number ${PORT}`);
});
