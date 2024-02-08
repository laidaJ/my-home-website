const mongoose = require('mongoose')

//初始化数据
const addressSchema = new mongoose.Schema({
  仓库名称: {
    type: String,
    require: [true, '需要指定仓库名称']
  },
  联系人: {
    type: String,
    require: [true, '需要指定联系人']
  },
  电话: {
    type: Number,
    require: [true, '需要填写联系方式'],
    unique: true
  },
  地址: {
    type: String,
    require: [true, '需要填写收件地址']
  }
})

const priceSchema = new mongoose.Schema({
  商品编码: {
    type: Number,
    unique: true
  },
  条形码: Number,
  生产商: {
    type: String,
    require: [true, '需要指定生产商']
  },
  商品名称: {
    type: String,
    require: [true, '需要填写商品名称']
  },
  出厂价: Number,
  供货价: Number,
  计量单位g: Number
})

//导出数据名
exports.Address = mongoose.model('Address', addressSchema)
exports.Price = mongoose.model('Price', priceSchema)
