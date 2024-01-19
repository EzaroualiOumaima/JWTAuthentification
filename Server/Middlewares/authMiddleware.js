const jwt = require("jsonwebtoken");

const verifyToken =  (req , res , next) => {
    const {access_token} = req.cookies;
    // console.log(token);
    if (!access_token) {
        res.status(401).json({message : "Unauthorized"})

    }
    try {
        const decodedToken = jwt.verify(access_token , process.env.Secret_key);
        // console.log(decodedToken)
        req.userId = decodedToken.userId
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });

        
    }

}
module.exports = verifyToken;