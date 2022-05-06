import { body } from 'express-validator'

const notAllowed = "<>*%^~`'{}{}|"
const alpha = "abcdefghijklmnopqrstuvwxyz?!/ "
const upperAlpha = alpha.toUpperCase()
const symbolsNumber = "+-().1234567890 "

const messageSanitizer = [
    body("message").isWhitelisted(`${symbolsNumber}${upperAlpha}${alpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("email").isEmail().normalizeEmail().escape().withMessage("email-invalid"),
    body("name").isWhitelisted(`${symbolsNumber}${upperAlpha}${alpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted")
]

export default messageSanitizer