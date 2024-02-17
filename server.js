// 引入modules
const server = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//Database
/*
const DB = process.env.DATABASE_LOCAL
const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log('DB connect success');
    } catch (error) {
        console.error(error);
    }
}
connectDB();
*/

// 监听端口
server.listen(process.env.port, `${process.env.url}`, () => {
  console.log(`App is running on ${process.env.url}:${process.env.port}`);
});
