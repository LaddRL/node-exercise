import express from "express";
import db from "../mockdb";

const router = express.Router();

router.get("/:id?", (req, res, next) => {
    try {
        // TODO
        let { id } = req.params;
        let data;
        if(id){
            data = await db.getOne(id);
        }
        else {
            data = await db.getAll();
        }

    } catch (error) {
        next(error);
    }
})

router.post("/", (req, res, next) => {
    try {
        // TODO
    } catch (error) {
        next(error);
    }
})

router.put("/:id", (req, res, next) => {
    try {
        // TODO
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", (req, res, next) => {
    try {
        // TODO
    } catch (error) {
        next(error);
    }
})

export default router;