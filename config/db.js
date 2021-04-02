const mongoose = require('mongoose')

// เรียก mongodb ใน json ที่เราสร้าง
const db = `mongodb+srv://jfornqz01:jfornqz123@shippopcluster.jwkci.mongodb.net/shippop?retryWrites=true&w=majority`

const connectDB = async() => {
    try {

        // ใส่ await เพื่อให้รอจนเสร็จก่อน 
        await mongoose.connect(db, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            // ถ้าเชื่อมต่อสำเร็จให้โชว์
        console.log('Connect to mongodb atlas!')

    } catch (err) {

        // ถ้ามีปัญหา
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB