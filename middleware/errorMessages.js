import { validationResult } from "express-validator";

export default function errorMessage (rules) {
    const rulesArray = [...rules]

    rulesArray.push((req, res, next)=> {
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            return next()
        }
        const prettyMistakes = errors.array().map(err => {
            return {[err.param]: err.msg}
        })
        res.status(400).send({errors: prettyMistakes})
    })
    return rulesArray
}