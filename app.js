var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken")
const privateKey = "akusukakopi"

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/Users");
const HeroesRouter = require("./routes/HeroesRouter");
const CountryRouter = require("./routes/Country")

var app = express();
mongodConnect = process.env.DB_LOCAL;
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/heroes",validateUser ,HeroesRouter);
app.use("/country",validateUser ,CountryRouter);


function validateUser(req,res,next){
  jwt.verify(req.headers["x-access-token"],privateKey,(err,decoded) => {
    if(err){
      res.json(err)
    }else{
      req.body.userId = decoded.id;
      next()
    }
  })
}

module.exports = app;
