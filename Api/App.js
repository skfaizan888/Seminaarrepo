const express = require("express")
const cors = require("cors")
const ProductModel=require("./Model/ProductModel")
const connectDB = require("./Db")

const {
    send
} = require("process")

const app = express()
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("New API ")
})

app.get("/products", async (req, res) => {
    connectDB();
    const Result = await ProductModel.find({});
    res.send(Result)
})

app.listen(4545, () => {
    console.log("Server On Runnig 4545");
})