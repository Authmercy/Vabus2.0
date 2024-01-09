import express from "express";
const router = express.Router();

import  {
    createQuartier,
    getQuartiers,
    getQuartier,
    deleteQuartier,
    updateQuartier,
} from "../controllers/quartiers.js";

router.post("/", createQuartier);
router.put("/:id",  updateQuartier);
router.get("/", getQuartiers);
router.get("/:id",  getQuartier);
router.delete("/:id", deleteQuartier);

export default router;
