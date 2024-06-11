const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../constants");

function createAccessToken(user){
    const expToken = new Date();
    expToken.setHours(expToken.getHours()+3);

    const payload = {
        token_type : "access",
        user_id : user._id,
        iat : Date.now(),
        exp : expToken.getTime(),
    };

    return jwt.sign(payload, JWT_KEY);
}

function createRefreshToken(user){
    const expToken = new Date();
    expToken.setHours(expToken.getMonth() + 1);

    const payload = {
        token_type : "access",
        user_id : user._id,
        iat : Date.now(),
        exp : expToken.getTime(),
    };

    return jwt.sign(payload, JWT_KEY);
}

function decode(token){
    return jwt.decode(token, JWT_KEY, true);
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    decode,
}