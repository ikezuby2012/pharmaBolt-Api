const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `/api/v1/user/google/callback`,
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

exports.authProtect = (req, res, next) => {
    res.send(req.user);
    next();
}

exports.toProtect = (req, res) => {
    res.send("hello user");
}
