const express = require("express");
const mongoose = require("mongoose");
const UserPath = require("./routes/auth");
const PostPath = require("./routes/post");
const SavePath = require("./routes/saves");
const app = express();
const cors = require("cors");

const PORT = 4500;
// Connection To Database
async function connectToDatabase() {
  try {
    const res = await mongoose.connect("mongodb://0.0.0.0/Twitter");
    if (res) {
      console.log(`Connected to MongoDB Successfully...`);
    }
  } catch (error) {
    console.log("Connection Failed to mongodb", error);
  }
}
connectToDatabase();
//Middleware
app.use(express.json());
app.use(cors());
app.use("/api", UserPath);
app.use("/api", PostPath);
app.use("/api", SavePath);
/** */

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
