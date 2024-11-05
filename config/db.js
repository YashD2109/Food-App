const mongoose = require("mongoose");
const colors = require("colors");

//function mongodb databse connection
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Database ${mongoose.connection.host}`.bgWhite);
    } catch (error) {
        console.log("DB ERROR", error);

    }
};
module.exports = connectDb;
