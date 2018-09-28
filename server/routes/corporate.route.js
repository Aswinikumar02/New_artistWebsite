const router = require('express').Router();

router.get('/allClientWork', (req,res)=>{
  console.log('to check for client name',req.query);
  if(req.query.caption == 'pothys'){
    res.send(JSON.stringify([
      {
        original: "./../client/Images/IMG_20160615_105331_BURST1.jpg",
        thumbnail: "./../client/Images/IMG_20160615_105331_BURST1.jpg"
      },
      {
        original: "./../client/Images/IMG_7976.jpg",
        thumbnail: "./../client/Images/IMG_7976.jpg"
      },
      {
        original: "./../client/Images/IMG_20160615_105341_BURST11.jpg",
        thumbnail: "./../client/Images/IMG_20160615_105341_BURST11.jpg"
      }
  ]))
  }
  else if(req.query.caption == 'kalapa_druma'){
    res.send(JSON.stringify([
      {
        thumbnail: "./../client/Images/IMG_20180812_130052_HDR.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        thumbnailCaption:'123'
      }
  ]))
  }
  else{
    res.send(JSON.stringify([
      {
        thumbnail: "./../client/Images/IMG_20180327_125532_HDR.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        thumbnailCaption:'123'
      }
  ]))
  }
})
router.get('/allCorporateImage', (req, res) => {
  console.log('category router');
  // res.send("categories");
  res.send(JSON.stringify([
    {
            thumbnail: "https://image1.owler.com/1383728258369.png",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            thumbnailCaption:'123',
            caption:'pothys'

    },
    {
            thumbnail: "http://www.kalpakshema.com/images/kalapa_druma.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            thumbnailCaption:'123',
            caption:'kalapa_druma'
    },

    {
            thumbnail: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/022011/joyalukkas_0.png?itok=EKKE4G_m",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            thumbnailCaption:'123',
            caption:'joyalukkas'
    }
  ]));
});


module.exports = router;
