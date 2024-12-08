const mongoose = require("mongoose");
mongoose.set('debug', true);
const connectDB = asyncHandler(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            authSource: 'admin'
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
})

module.exports = connectDB