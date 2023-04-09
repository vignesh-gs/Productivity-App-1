const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    uname: String,
    pwd: String,
    // phoneNo:String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
