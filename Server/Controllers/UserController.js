const User = require('../Models/Userdb');
const bcrypt = require ('bcrypt');
const jwt = require ("jsonwebtoken");


// Register 

const postRegister = async(req, res) => {
    try {
        const user = req.body;
        const {name , email , password} = user;
        //check if email is already exist
        const isEmailExist = await User.findOne({email})
        if (isEmailExist) {
            res.status(409).json({
                message : "Email is already exist"
            })
            return;
        }
        // if not create a new user with haching password
       const hachPassword = await bcrypt.hash(password , 10 )
        const newUser = await User.create({
            name,
            email ,
            password : hachPassword
                })
        res.status(201).json({
            success : true,
            message: 'user created successfuly',
            user : newUser
           })

    } catch (error) {
        console.error(error)
    }
}



// Login using jwt 

const postLogin = async(req , res) => {
    try {
        const user = req.body ;
        const {email , password} = user;
        // check if the user exist in the database or not
        const isUserExist = await User.findOne({email});
        if(!isUserExist) {
            res.status(401).json({message : 'Authentication failed'})
        }
        const passwordMatched = await bcrypt.compare(password , isUserExist.password)
        if(!passwordMatched){
            res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({userId : isUserExist._id}, process.env.Secret_key , {expiresIn: '1d'});
        res.cookie("access_token",token)
        res.status(200).json({
            status: 200,
             success: true,
             message: "login success",
              token,
              role: isUserExist.role
        })
    } catch (error) {
        res.status(500).json({message :"Login Failed"})
        
        
    }
}

const userLoggout = (req, res) => {
    res.clearCookie("access_token");
    res.status(200).json({message : "User logged out"})
}




module.exports ={
    postRegister  , postLogin , userLoggout
}