import express from "express";
const router = express.Router();

import  {
    createChauffeur,
    getChauffeurs,
    getChauffeur,
    deleteChauffeur,
    updateChauffeur,
} from "../controllers/chauffeur.js";

router.post("/", createChauffeur);
router.put("/:id",  updateChauffeur);
router.get("/", getChauffeurs);
router.get("/:id",  getChauffeur);
router.delete("/:id", deleteChauffeur);

export default router;
