import express from "express";
import Message from "../models/Messages.js";
import messageSanitizer from "../middleware/messageSanitizer.js";
import errorMessage from "../middleware/errorMessages.js";

const messageRouter = express.Router()

messageRouter.get("/", async (req, res, next)=> {
    const messages = await Message.find(req.body)
    res.send(messages)
})

messageRouter.post("/", errorMessage(messageSanitizer), async (req, res, next)=> {
    try {
        const sentMessage = await Message.create(req.body)
        const submissionId = sentMessage._id
        res.status(200).send({"submissionID": submissionId, "submittedName": req.body.name})
    }catch(error){
        next({error:400, message: "request could not be completed"})
    }
})


export default messageRouter