require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongoDB connected');
    } catch (err) {
        // console.log(err);
        console.error('mongDB connected failed');
        process.exit(1);
    }
}

module.exports = connectDB;