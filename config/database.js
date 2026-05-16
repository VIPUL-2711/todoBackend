const mongoose=require('mongoose');

require("dotenv").config();
const dbconnect=()=>{
  mongoose.connect(process.env.DATABASE_URL)
  .then(()=>console.log("db connection succesfully")
  )
  .catch((error)=>{
    console.log("issue in db connection");
    console.error(error.message);
    process.exit(1);
  });
}

module.exports=dbconnect;