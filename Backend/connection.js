const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://donthomasbinoy814:user@cluster0.4eihooz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
