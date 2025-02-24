import express from "express";
import { BuildingController } from "../controllers/building.controller";

const router= express.Router();

router
    .get("/", BuildingController.get)
    .get("/:id", BuildingController.getById)
    .post("/", BuildingController.create)
    .put("/:id", BuildingController.update)
    .delete("/:id", BuildingController._delete);

export default router;