const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config_db/database.js");
const expressLayouts = require('express-ejs-layouts');
const mainRouter = require("./routes/mainRouter.js")
const adminRouter = require("./routes/adminRouter.js")
connectDB(); // DB 연결 실행

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set('layout', 'layouts/main');
app.use(express.static(path.join(__dirname, "public")));
app.use("/", mainRouter);
app.use("/", adminRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})