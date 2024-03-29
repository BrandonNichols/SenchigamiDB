require("dotenv").config();

const express = require("express");
const member = require("./db/routes/api/member.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/team", member);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
