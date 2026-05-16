//import the model
const Todo=require('../model/Todo');

//define route handler

exports.createTodo=async(req,res)=>{
  try{
    //extract title and description from request body
    const {title,description}=req.body;

    //create a todo object and insert into databse;

    const response=await Todo.create({title,description});

    //send a json response with a succes flag

    res.status(200).json(
      {
        succes:true,
        data:response,
        message:'entry created successfully',
      }
    );
  }
  catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
      succes:false,
      data:"internal server error",
      message:err.message,
    })
    
  }
}