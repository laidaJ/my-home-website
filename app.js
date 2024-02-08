// 导入modules
const express = require('express');
const app = express();
const router = require('./routers/mkhRouter')

// 使用middleware
app.use(express.static('public'));
app.use(express.json())
app.use('/api/v1/mkh', router)

// 导出module
module.exports = app