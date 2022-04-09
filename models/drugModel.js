const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const drugSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        maxLength: [30, "the name is too long!"],
        minlength: [1, "a name must have more or equal to 1 character!"],
        required: [true, 'a drug must have a name'],
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'a drug must have a price']
    },
    image: {
        type: String,
        required: [true, "a drug must have an image"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5,
        min: [1, "rating must be above 1.0"],
        max: [5, "rating must not be above 5.0"],
        set: val => Math.round(val * 10) / 10
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (val) {
                //this only point to current doc on NEW document creation 
                return val < this.price; // 100 < 200
            },
            message: "discount price ({VALUE}) should be below regular price!"
        },
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = model("Drug", drugSchema);