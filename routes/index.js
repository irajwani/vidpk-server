var cloudinary = require('cloudinary').v2;
module.exports = {
  uploadVid: function (req,res) {
    cloudinary.uploader.upload("/Users/imadrajwani/code/nodeJS/vidpk-server/routes/sea-turtle.mp4", 
    { resource_type: "video", 
      public_id: "lorem_folder/sea-turtle",
      // chunk_size: 6000000 
    },
      function(error, result) { 
        if(result) {
          console.log(result)
          //result.public_id,created_at,url,secure_url
        }
        else if(error) {
          console.log(error);
        }
      });
  }
}