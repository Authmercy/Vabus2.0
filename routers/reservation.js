import express from "express";
const router = express.Router();

import  {
    createReservation,
    getReservations,
    getReservation,
    deleteReservation,
    updateReservation,
} from "../controllers/reservation.js";

router.post("/", createReservation);
router.put("/:id",  updateReservation);
router.get("/", getReservations);
router.get("/:id",  getReservation);
router.delete("/:id", deleteReservation);

export default router;
