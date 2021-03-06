const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const passport = require("passport");
const sessionx = require("express-session");

//routes
const userRouter = require("./routes/userRoute.js");
const drugRouter = require("./routes/drugRoute");
const cartRouter = require("./routes/cartRoute");
//const imageRoute = require("./routes/imageRoute");
const imageRouter = require("./routes/imageRoute");
const errorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const { session } = require("passport/lib");
const app = express();

//<-- serving static files
app.use(express.static(`${__dirname}/public`));
// const upload = require("./utils/multer");

//cors
app.use(cors());
app.options("*", cors());
//<-- parsing data to the backend
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
// data sanitization against noSql query injection
app.use(mongoSanitize());
//<-- data sanitization against xss attacks
app.use(xss());

app.use(compression());
app.use(sessionx({ secret: "secret" }));
app.use(passport.initialize());
app.use(passport.session());

require('./controllers/googleAuth');
require('./utils/config');

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
//<-- limit request from the same api
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour"
});
app.use("/api", limiter);

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/user", userRouter); //user route
app.use("/api/v1/drug", drugRouter); //drug route
app.use("/api/v1/image", imageRouter); //image route
app.use("/api/v1/cart", cartRouter); //image route

//ping if api is working
app.get("/", (req, res) => {
    res.send("server is working! \n <a href='/api/v1/user/auth/goo'> Authenticate with google</a>");
})

app.get('/api/v1/user/auth/goo',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);
//to serve images to the client side
app.use("/images", express.static('resources'));
//SERVE CLIENT ROUTES
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//ROUTE HANDLER NOT SPECIFIED 
app.all("*", (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});


app.use(errorHandler);

module.exports = app;