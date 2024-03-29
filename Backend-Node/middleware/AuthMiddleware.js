const jwt = require('jsonwebtoken')
const Users = require('../models/User');
const TOKEN_SECRET = process.env.TOKEN_SECRET;

//AUTH MIDDLEWARE
const auth = async (req,res,next) =>{
   try{
       const token = req.header('Authorization').replace('Bearer ', '');
       //console.log(token);
       
       const decode = await jwt.verify(token, TOKEN_SECRET);
       
       const user = await Users.findOne({ _id: decode._id, 'tokens.token': token })
       //console.log(user);
       
       
       if(!user)
        throw new Error()
    req.token = token
    
    req.user = user;
    //console.log('nice')
    //console.log(user);
    //console.log('nice')
    next();
   }catch(e){
       res.status(400).send({error:"authentication X"})
   }
}

module.exports = auth;