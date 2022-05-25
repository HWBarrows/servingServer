import express from "express";
import Credit from "../models/Credits.js";


const creditsRouter = express.Router()

creditsRouter.get("/", async (req, res)=> {
    const credits = await Credit.find(req.query)
    res.send(credits)
})



export default creditsRouter