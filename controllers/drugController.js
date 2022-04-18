const Drug = require("../models/drugModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handleFactory");


const APIFeatures = require("../utils/apiFeatures");

exports.getAllDrugs = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Drug.find(), req.query)
        .filter().sort().limitFields().paginate();
    const drugs = await features.query;

    res.status(200).json({
        status: 'success',
        results: drugs.length,
        data: drugs
    });
});

exports.createNewDrug = factory.createOne(Drug);
exports.deleteDrug = factory.deleteOne(Drug);

exports.getDrugById = catchAsync(async (req, res, next) => {
    const drug = await Drug.findById(req.params.id);

    if (!drug) {
        return next(new AppError('no drug found with that ID', 404));
    }

    res.status(200).json({
        status: "success",
        data: drug
    });
});;

exports.updateDrugById = factory.updateOne(Drug);

exports.getMostExpensiveDrug = catchAsync(async (req, res, next) => {
    const doc = await Drug.aggregate([
        {
            $sort: {
                price: -1
            }
        },
    ]);

    res.status(200).json({
        status: "success",
        data: doc
    });
});