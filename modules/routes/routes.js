import express from "express";
import mobileRoutes from "./mobile.routes.js";

const Router = express();

Router.use("/mobile", mobileRoutes);

export default Router;
