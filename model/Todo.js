const mongoose=require('mongoose');
const todoschema=new mongoose.Schema(
  {
    title:{
      type:String,
      require:true,
      maxLength:50,
    },
    description:{
      type:String,
      require:true,
      maxLength:50,
    },
    createdAt:{
      type:Date,
      require:true,
      default:Date.now(),
    },
    updatedAT:{
      type:Date,
      require:true,
      default:Date.now(),
    }
  }
);

module.exports=mongoose.model("todo",todoschema);