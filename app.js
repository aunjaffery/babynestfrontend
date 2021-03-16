const port = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Babynest frontend listening to port ${port}`);
});

