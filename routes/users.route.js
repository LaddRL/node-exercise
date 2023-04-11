import express from "express";
import db from "../mockdb";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        // TODO
        let { id } = req.params;
        let data;
        if(id) {
            data = await db.getOne(id);
        }
        else {
            data = await db.getAll();
        }
        res.json(data)
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    let data;
    try {
        // TODO
        let newUser = req.body;
        data = await db.add(newUser)
    } catch (error) {
        next(error);
    }
    res.json(data);
})

router.put("/:id", async (req, res, next) => {
    let data;
    try {
        // TODO
        let { id } = req.params;
        let updatedUser = req.body;
        data = await db.update(id, updatedUser);
    } catch (error) {
        next(error);
    }
    res.json(data);
})

router.delete("/:id", async (req, res, next) => {
    try {
        // TODO
        let { id } = req.params;
        data = await db.remove(id);
    } catch (error) {
        next(error);
    }
    res.json(data);
})

router.post("/")

export default router;