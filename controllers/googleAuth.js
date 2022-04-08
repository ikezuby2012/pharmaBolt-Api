const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/api/v1/user/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        //User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //    return done(null, user);
        //});

        console.log(profile);
    }
));

exports.callback = () => {
    passport.authenticate('google', {
        successRedirect: '/protect',
        failureRedirect: '/',
    })
}

exports.protect = (req, res) => {
    res.send("hello user");
}
