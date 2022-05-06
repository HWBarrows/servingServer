import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from'./lib/database.js'
import messageRouter from './routes/messageRouter.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
connect()

app.use("/messages", messageRouter)
// app.get("/", (req, res, next)=> {
//     res.send("I am root")
// })

app.use((req, res, next)=> {
    next(
        { status: 404, message: `Resource ${req.method} ${req.url} cannot be found`}
    )
})


//Global error handling middleware
app.use((error, req, res, next)=> {
    //console.log(error)
    res.status( error.status || 500).send({
        error: error.message || "Unable to complete request"
    })
})

const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`Party at http://localhost:${port}`);
})

