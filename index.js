import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./router.js";

const PORT = 5000;
const DB_URL =
    "mongodb+srv://user:user@cluster0.vg1vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

// подключаем для express преобразование JSON формата
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => console.log("SERVER IS WORKING " + PORT));
    } catch (e) {
        console.error(e);
    }
}
startApp();

// app.get("/sa", (req, res) => {
// 	console.log(req.query.tru);
// 	res.status(200).json("ajajaja")
// })
