const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allData = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("data is running");
});
app.get("/chef-recipe", (req, res) => {
  res.send(allData);
});

app.get("/chef-recipe/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const chefData = allData.find((data) => parseInt(data._id) === id);
  res.send(chefData)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
