const express = require('express')
const router = express.Router()
const User = require('../models/users')
const fetchuser = require('../middleware/ferchuser')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const jwt_secret = 'helloworld'



//SignUp Api
 router.post('/signup', async(req, res) => {
//Password encrytion
try{
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(req.body.password, salt);
//User Create
  try{
    const user = User.create({
name:req.body.name,
email:req.body.email,
password:hash,
    }).then(user=> res.json(user)).catch(err=> {console.log(err) 
      res.json({error:"Email already exists"})})
    }
    catch{
      res.status(500).json('server')
    }
  }
  catch{
      res.status(500).json("internal server error")
  }
  
})


//SignIn Api
router.post('/signin', async(req, res) => {
  try{
  const logged = await User.findOne({email:req.body.email})
  if(!logged){
    res.json('incorrect email')
  }
  if(logged){
  const tt = await bcrypt.compare(req.body.password, logged.password);
 if(tt){
  const data ={
    user:{
      id:logged.id
    }
  }
  ath_token = jwt.sign(data,jwt_secret)
  res.json({ath_token})
 }
 else{
  res.json("incorrct password")
 }
}
}
catch{
  res.send(500).json("server error")
}
})


//Route3: Getting User Data
router.post('/getuser',fetchuser, async(req,res) => {
try{
 const userId = await req.user.id
  const userdata = await User.findOne({_id:userId}).select("-password").select('-_id')
  console.log(userdata)
  res.json(userdata)
}
catch{
  res.status(500).json({error:'internal server error'})
}
})


module.exports = router
