const express = require('express')
const router = express.Router()
const { getMemos, getMemo, createMemo, updateMemo, deleteMemo } = require('../controllers/memosController')

router.get('', getMemos)
router.get('/:id', getMemo)
router.post('', createMemo)
router.patch('/:id', updateMemo)
router.delete('/:id', deleteMemo)

module.exports = router
