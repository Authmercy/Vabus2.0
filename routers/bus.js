import express from "express";
const router = express.Router();

import  {
    createBus,
    getBuss,
    getBus,
    getBusSpecifique,
    deleteBus,
    updateBus,
} from "../controllers/bus.js";

router.post("/", createBus);
router.put("/:id",  updateBus);
router.get("/", getBuss);
router.get('/:nomAgence/:Villedepart/:Villedestination',getBusSpecifique);
router.get("/:id",  getBus);
router.delete("/:id", deleteBus);

export default router;
