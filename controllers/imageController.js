const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/config");
const fs = require('fs');


exports.imageUpload = catchAsync(
    async(req, res) => {

        const uploader = async (path) => await cloudinary.uploads(path, 'images');
      
        if (req.method == 'POST'){
          const urls = []
      
          const files = req.files
      
          for (const file of files){
            const {path} = file
      
            const newPath = await uploader(path)
      
            urls.push(newPath)
      
            fs.unlinkSync(path)
          }
      
          res.status(200).json({
            message: 'images Uploaded Successfully',
            data: urls
          })
          console.log("success", urls);
        }else{
          res.status(405).json({
            err: "error uploading image"
          })
        }
      }
);