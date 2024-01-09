import express from "express";
const router = express.Router();

import  {
    createAgence,
    getAgences,
    getAgence,
    deleteAgence,
    updateAgence,
} from "../controllers/agence.js";

router.post("/", createAgence);
router.put("/:id",  updateAgence);
router.get("/", getAgences);
router.get("/:id",  getAgence);
router.delete("/:id", deleteAgence);

export default router;
