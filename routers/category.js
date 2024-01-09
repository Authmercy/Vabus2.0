import express from "express";
const router = express.Router();

import  {
    createCategory,
    getCategorys,
    getCategory,
    deleteCategory,
    updateCategory,
} from "../controllers/category.js";

router.post("/", createCategory);
router.put("/:id",  updateCategory);
router.get("/", getCategorys);
router.get("/:id",  getCategory);
router.delete("/:id", deleteCategory);

export default router;
