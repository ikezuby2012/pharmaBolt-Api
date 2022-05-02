const Cart = require("../models/cartModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handleFactory");

exports.getAllCart = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Cart.find(), req.query).filter().sort().limitFields().paginate();
    const carts = await features.query;

    res.status(200).json({
        status: 'success',
        results: carts.length,
        data: carts
    });
})

exports.addToCart = catchAsync(
    async (req, res, next) => {
        const { drug, user, quality } = req.body;
        //check if drug is present in cart with the id or name
        //if present, increase the quality of the drug in cart
        //if not present, add to cart
    }
)

exports.getCart = catchAsync(async (req, res, next) => {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
        return next(new AppError("no cart found with that id", 404));
    }
    
    res.status(200).json({
        status: "success",
        data: cart
    })
});

exports.createNewCart = factory.createOne(Cart);
exports.deleteCart = factory.deleteOne(Cart);