const Task = require("../Model/task.schema");

exports.postTask = async (req, res) => {
  try {
    const { title, desc, price } = req.body;
    const taskData = new Task({ title, desc, price });
    const savedTask = await taskData.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getFunction = async (req, res) => {
  try {
    const taskData = await Task.findOne();
    res.status(200).json(taskData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSingleFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const taskData = await Task.findById(id);
    if (!taskData) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(taskData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, desc, price } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, desc, price },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
