const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config_db/database.js");
const expressLayouts = require('express-ejs-layouts');
const mainRouter = require("./routes/mainRouter.js")

connectDB();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set('layout', 'layouts/main');
app.use(express.static(path.join(__dirname, "public")));
app.use("/", mainRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})