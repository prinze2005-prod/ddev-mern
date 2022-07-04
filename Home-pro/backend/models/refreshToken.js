const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Account",
        unique: true,
    },
    token: { type: String, required: true },
    //createdAt: { type: Date, default: Date.now, expires: 3600 },
    createdAt: { type: Date, default: Date.now, expires: 600 },
});

module.exports = mongoose.model('refreshToken', refreshTokenSchema, 'RefreshTokens');