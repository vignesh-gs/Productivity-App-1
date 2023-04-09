import { Schema, model } from "mongoose";

const UserDetailsSchema = new Schema(
  {
    uname: String,
    pwd: String,
    // phoneNo:String,
  },
  {
    collection: "UserInfo",
  }
);

model("UserInfo", UserDetailsSchema);
