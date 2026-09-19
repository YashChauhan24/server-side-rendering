import express from "express";
import appRouter from "./modules/routes/routes.js";
import mongoose from "mongoose";
import formidable from "express-formidable";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(formidable());

app.use("/", appRouter);

const url =
  "";
mongoose
  .connect(url, {
    dbName: "launchpad",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(async () => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => console.error(err));
app.listen(8081);
