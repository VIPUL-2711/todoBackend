const express=require("express");
const router=express.Router();

//import controller
const {createTodo}=require("../controller/createdTodo")

const {getTodos,getTodoById}=require("../controller/getTodo")
const {UpdateTodo}=require("../controller/UpdateTodo")
const {DeleteTodo}=require("../controller/DeleteTodo")
//define api routes
//basically mapping of controller with routes 
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);
router.get("/getTodos/:id",getTodoById );
router.put("/Updateone/:id",UpdateTodo);
router.delete("/DeleteTodo/:id",DeleteTodo);


module.exports=router;