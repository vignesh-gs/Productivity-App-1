const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.use(express.json);

// setting up mongodb
const mongoUrl =
  "mongodb+srv://vaishakhnambiar2002:productKey@cluster0.lnikm52.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => console.log(e));

// setting up app
app.listen(3000, () => {
  console.log("Server up!");
});

app.post("/post", async (req, res) => {
  console.log(req.body);
});
