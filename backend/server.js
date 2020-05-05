const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect("mongodb+srv://vinay_k:mydatabase@999@cluster0-op6yc.gcp.mongodb.net/test", { useNewUrlParser: true, useCreateIndex: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
