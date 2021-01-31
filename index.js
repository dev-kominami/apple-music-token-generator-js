"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var ts_dotenv_1 = require("ts-dotenv");
var env = ts_dotenv_1.load({
    MUSIC_SECRET_KEY: String,
    TERM_ID: String,
    KEY_ID: String
});
var secret_key = "-----BEGIN PRIVATE KEY-----\n" + env.MUSIC_SECRET_KEY + "\n-----END PRIVATE KEY-----";
var option = {
    expiresIn: '3d',
    header: {
        alg: 'ES256',
        kid: env.KEY_ID
    }
};
var payload = {
    iss: env.TERM_ID
};
var token = jwt.sign(payload, secret_key, option);
console.log("\n=======TOKEN=======\n" + token + "\n===================\n");
