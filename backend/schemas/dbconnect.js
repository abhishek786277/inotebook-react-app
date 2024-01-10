import mongoose from "mongoose";
import User from "./userdb.js"
const mongouri = "mongodb://127.0.0.1:27017/inotebook";
// const obj = {
//   name: "abhishek1",
//   email: "b11@gmail11.com",
//   password: "11aahbhdd",
// };

const connecttomoongose = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Your mongodb database connected....... Happy coding");
    // const user = User
    // await user.create(obj)
  } catch (err) {
    console.log(err);
  }
};
export default connecttomoongose;

