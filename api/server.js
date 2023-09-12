const express = require('express')
const app = express()
const port = 6001
const cors = require('cors');
const multer = require('multer')
const Product = require('./models/Products')
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static('public/assets'))
//const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.get('/',(req,res)=>{
  res.send("hello world")
})

app.post("/pic", upload.single("picture"),(req,res)=>{
  const {name,price,category,description} = req.body
  
console.log(req.body)
const imagePath = req.file.filename;

  const slugmake = name.replace(/ /g,"-")
 const product = Product.create({
  name:name,
  description:description,
  price:price,
  catagory:category,
  img:imagePath,
  slug:slugmake,
 }).then(product=>res.json(product))
});


app.post("/image",async(req,res)=>{
  console.log(req)
  console.log(req.body)
const findproduct = await Product.findOne({price:req.body.price})
res.json(findproduct)
})


const connecttomongo = require('./db')
connecttomongo()

//Routes

const auth = require('./routes/auth.js')
app.use('/ap', auth)

const home = require('./routes/homepage.js')
app.use('/home',home)





//Main Page

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})