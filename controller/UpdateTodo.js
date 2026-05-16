//import model 
const Todo = require("../model/Todo");
//define api
exports.UpdateTodo = async (req, res) => {
  try {

    const { id } = req.params;

    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        updatedAt: Date.now(),
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });

  }
};