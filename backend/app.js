const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookroutes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.mii9pbh.mongodb.net/BookApp?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to the database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
