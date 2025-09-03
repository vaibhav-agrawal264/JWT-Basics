const {UnauthenticatedError} = require("../errors")
const jwt = require('jsonwebtoken')


const authMiddleware = async (req, res, next) => {
    const authheader = req.headers.authorization
    if (!authheader || !authheader.startsWith('Bearer ')) {
        throw UnauthenticatedError('Invalid Token')
    }
    const token = authheader.split(' ')[1]
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {id,username}=decoded
        req.user={id,username}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not Authorized to access this route')
    }
    


}

module.exports = authMiddleware