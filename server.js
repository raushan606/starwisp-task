const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

//* Connect Database
connectDB();

//* PORT
const PORT = process.env.PORT || 5000;

//* cors
app.use(cors());

//* BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server is up on port number ${PORT}`);
});
