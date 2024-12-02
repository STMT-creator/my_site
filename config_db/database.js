const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            authSource: 'admin'
        })
        console.log('=================== DB 연결 성공 ====================')
        if (!conn) {
            console.log('==================== DB 연결 실패 ====================')
        }
    }
    catch (err) {
        console.log('==================== DB 연결 에러 ====================')
        console.log('err')
    }
}

module.exports = connectDB