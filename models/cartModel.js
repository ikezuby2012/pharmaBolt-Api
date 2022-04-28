const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    drug: {
        type: Schema.Types.ObjectId,
        ref: "Drug",
        required: true,
    },
    quality: {
        type: Number,
        default: 1,
        min: [1, "must not be less than 1"]
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = model("Cart", cartSchema);