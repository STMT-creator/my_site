const mongoose = require("mongoose");
mongoose.set('debug', true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            authSource: 'admin',
            serverSelectionTimeoutMS: 50000 // 타임아웃 시간 연장
        })
        console.log('=================== DB 연결 성공 ====================')
        if (!conn) {
            console.log('==================== DB 연결 실패 ====================')
        }
        // console.log(conn.connection.host, conn.connection.name)
    }
    catch (err) {
        console.log('==================== DB 연결 에러 ====================')
        console.log('err')
    }
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

module.exports = connectDB