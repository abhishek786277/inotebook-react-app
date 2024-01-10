import connecttomoongose from "../schemas/dbconnect.js";
import express from "express";
import routernotes from "../routes/notes.js";
import router from "../routes/userdb.js";
import cors from "cors"

connecttomoongose();
const app = express();
const port = 5000;
app.use(cors())

app.use(express.json());
app.use("/api/auth", routernotes);
app.use("/api/auth", router);
// app.use('/auth/notes',require('../routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
