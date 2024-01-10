import jsonwebtoken from "jsonwebtoken";
import connecttomoongose from "../schemas/dbconnect.js";
import User from "../schemas/userdb.js";
connecttomoongose();
const jwt = jsonwebtoken;
const jwtsecretkey = "shhhshhhhshhh";
const jwtkey =
  "eyJhbGciOiJIUzI1NiJ9.NjRiYzE4NzBkMDI5NjU2MzY1NTgxMDQ4.S_dsBTQO0L4R0z9btF3Jr6dFtPfvK9bE3OeHOrxbwDY";
// var decoded = jwt.verify(jwtkey,jwtsecretkey)
// console.log(decoded)
var decoded = jwtkey.split(".")[1];
var verify = jwt.verify(jwtkey, jwtsecretkey);
const user = await User.findById(verify);
console.log(user);
// console.log(verify)
