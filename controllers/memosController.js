const Memo = require('../models/memos')

// 获取 memos 的路由处理函数
exports.getMemos = async (req, res) => {
  try {
    const memos = await Memo.find()
    res.status(200).json(memos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 根据 id 获取 memo 的路由处理函数
exports.getMemo = async (req, res) => {
  try {
    const memo = await Memo.findById(req.params.id)
    res.status(200).json(memo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 创建 memo 的路由处理函数
exports.createMemo = async (req, res) => {
  try {
    const { title, content, date } = req.body
    const memo = await Memo.create({ title, content, date })
    res.status(201).json(memo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 更新 memo 的路由处理函数
exports.updateMemo = async (req, res) => {
  try {
    const { title, content, date } = req.body
    const memo = await Memo.findByIdAndUpdate(
      req.params.id,
      { title, content, date },
      { new: true } // 指定返回更新后的数据
    )
    res.status(200).json(memo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 删除 memo 的路由处理函数
exports.deleteMemo = async (req, res) => {
  try {
    await Memo.findByIdAndDelete(req.params.id)
    res.status(200).json('memo deleted')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
