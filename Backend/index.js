const express = require("express");
const cors = require("cors");
const BlogModel=require("./model");
require("./connection");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());


app.post("/add",async(req,res)=>{
  try{
    const data=new BlogModel(req.body);
    await data.save();
    res.json({message:" Blog Added successfully!"});
  }catch(err){
    console.log(err);
    res.status(500).json({message:" Error adding Blog"});
 }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
