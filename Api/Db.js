const mongoose = require("mongoose")

const connectDB = () => {
    const db = "mongodb://localhost/shoppingdb"
    mongoose.connect(db).then(() => console.log(`connect to ${db}`)).catch((err) => console.log(err))
}
module.exports = connectDB