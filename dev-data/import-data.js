const fs = require("fs");
const mongoose = require("mongoose");
require('dotenv').config({ path: "./config.env" });

const Drug = require("../models/drugModel");

if (process.env.NODE_ENV === "development") {
    mongoose.connect(process.env.DATABASE_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`database connected successfully`);
    })
} else {
    mongoose.connect(process.env.DATABASE_ATLAS, {
        useNewUrlParser: true,
    }).then(() => {
        console.log(`database connected successfully`);
    })
}

//READ JSON FILE
const drugs = JSON.parse(fs.readFileSync(`${__dirname}/drugs.json`, "utf-8"));

//import data to database
const importData = async () => {
    try {
        await Drug.create(drugs);
        console.log("DB loaded successfully");
    } catch (err) {
        console.log(err)
    }
    process.exit(1);
};

const deleteData = async () => {
    try {
        await Drug.deleteMany();
    } catch (err) {
        console.log(err);
    }
    process.exit(1);
};

if (process.argv[2] === "--import") {
    importData();
}
if (process.argv[2] === "--delete") {
    deleteData();
}
console.log(process.argv);