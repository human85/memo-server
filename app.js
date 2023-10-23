const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8888
const memosRouter = require('./routes/memos')
const todosRouter = require('./routes/todos')

// 设置 Mongoose 连接
const mongoose = require('mongoose')
const PASSWORD = '数据库密码'
const mongoDB = `mongodb+srv://chenhao:${PASSWORD}@cluster0.irxgimw.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connected successfully')
  })
  .catch(error => {
    console.error('Mongoose connection error:', error)
  })

// 注册中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 注册路由
app.use('/memos', memosRouter)
app.use('/todos', todosRouter)

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`)
})
