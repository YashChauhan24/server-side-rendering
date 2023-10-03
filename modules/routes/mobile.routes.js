import express from "express";
import {
  addMobile,
  editMobile,
  getMobile,
  saveMobile,
  updateMobile,
} from "../controller/mobile.controller.js";

const mobileRouter = express();

mobileRouter.route("/add").get(addMobile);
mobileRouter.route("/edit/:id").get(editMobile);
mobileRouter.route("/:id").post(updateMobile);
mobileRouter.route("/").post(saveMobile);
mobileRouter.route("/").get(getMobile);

export default mobileRouter;
