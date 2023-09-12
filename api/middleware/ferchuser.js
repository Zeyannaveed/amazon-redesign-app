var jwt = require('jsonwebtoken');
const jwt_secret = 'helloworld'

const fetchuser = (req,res,next)=>{
    try{
    const token = req.header('ath_token');

    if(!token){
        res.status(401).send({error:'please use a valid token'})
    }
try{
    const data = jwt.verify(token,jwt_secret,(error,decode)=>{
        if(error){
            console.log(error)
        }
        if(decode){
            req.user = decode.user
            next()
        }
    })
}
catch{
    res.status(401).send({error:'please use a valid token'})
}
}
catch{
    res.status(500).json("internal server error")
}

}

module.exports = fetchuser;