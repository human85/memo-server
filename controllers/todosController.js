const Todos = require('../models/todos')

// 获取 todos 的路由处理函数
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todos.find()
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 创建 todo 的路由处理函数
exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body
    const todo = await Todos.create({ title })
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 更新 todo 的路由处理函数
exports.updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body
    // 仅更新状态时传过来的 title 字段为 undefined，该方法不会更新 title 字段，而是保持原始数据库中的值不变
    const todo = await Todos.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true } // 指定返回更新后的数据
    )
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 删除 todo 的路由处理函数
exports.deleteTodo = async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id)
    res.status(200).json('todo deleted')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
