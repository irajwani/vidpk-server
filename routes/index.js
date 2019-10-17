var cloudinary = require('cloudinary').v2;
module.exports = {
  uploadVid: function (req,res) {
    cloudinary.uploader.upload("/Users/imadrajwani/code/nodeJS/vidpk-server/routes/lorem_video.mp4", 
    { resource_type: "video", 
      public_id: "lorem_folder/lorem_video",
      // chunk_size: 6000000 
    },
      function(error, result) { 
        if(result) {
          console.log(result)
        }
        else if(error) {
          console.log(error);
        }
      });
  }
}