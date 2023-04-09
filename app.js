import express, { json } from "express";
const app = express();

import mongoose from "mongoose";

app.use(json);

// setting up mongodb
const mongoUrl =
  // "mongodb+srv://vaishakhnambiar2002:productKey@productivityapp.7ronhtf.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://vaishakhnambiar2002:vaishKey@productivityapp.7ronhtf.mongodb.net/?retryWrites=true&w=majority";

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

// const User = mongoose.model("UserInfo");

// app.post("/register", async (req, res) => {
//   const [name, pass] = req.body;
//   try {
//     await User.create({
//       uname: name,
//       pwd: pass,
//     });
//     res.send({ status: "Ok" });
//   } catch (error) {}
// });
