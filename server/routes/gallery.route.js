const router = require('express').Router();

router.get('/allGalleryImage', (req, res) => {
  console.log('category router');
  // res.send("categories");
  res.send(JSON.stringify([
    {
            original: "./../client/Images/CAM01224.jpg",
            thumbnail: "./../client/Images/CAM01224.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            count:0
    },
    {
            thumbnail: "./../client/Images/CIMG0798.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/flight(1).jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/flight(2).jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },{
            thumbnail: "./../client/Images/flight(3).jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174
    },
    {
            thumbnail: "./../client/Images/IMG_20150528_154355.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150528_163328.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20150530_191751.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150602_184950.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 174
    },
    {
            thumbnail: "./../client/Images/IMG_20150609_215259.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150621_184016.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150621_184130.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_7976.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150303_124700.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150303_154208.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150510_143448_SHOT2SHOT4.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150521_153954.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20150521_154530.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20150708_182715.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20160607_184215_BURST1.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20160608_180735.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20160608_180811.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 174
    },
    {
            thumbnail: "./../client/Images/IMG_20160608_180846.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20160615_105331_BURST1.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20160615_105341_BURST1.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20160702_163039.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20160617_173531.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20160617_173716.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161003_115920.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161003_133813.jpg",
            thumbnailWidth: 170,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161008_141934.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161011_112238.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161011_112328.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161019_164119.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 174
    },
    {
            thumbnail: "./../client/Images/IMG_20161021_191031.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161021_191051.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20161021_221629.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161021_221646.jpg",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "./../client/Images/IMG_20161021_222354.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161026_165931.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161127_174816.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161128_193329_HDR.jpg",
            thumbnailWidth: 170,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20161129_232710.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170213_121419.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170217_031241.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170220_182538.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170221_215103.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170223_211332.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170223_211400.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170228_201454.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170228_233724.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170402_151535.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170402_161046.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170529_130207.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170908_152227_HDR.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170925_112005.jpg",
            thumbnailWidth: 170,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170925_135827.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170925_135851.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170927_104617.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170927_104639.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20170927_141502.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20171122_132627.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20171218_122222.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20171218_122240.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20171227_155532_HDR.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20171227_155845_HDR.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180202_192334_HDR.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180306_123549_HDR.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180327_125532_HDR.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180618_104207_HDR.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180618_125347_HDR.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG_20180812_130052_HDR.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150301-WA0003.jpg",
            thumbnailWidth: 420,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150416-WA0000.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150515-WA0005.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150518-WA0001.jpg",
            thumbnailWidth: 200,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150530-WA0003.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150601-WA0001.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150926-WA0040.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 212
    },
    {
            thumbnail: "./../client/Images/IMG-20150928-WA0003.jpg",
            thumbnailWidth: 170,
            thumbnailHeight: 212
    }
  ]));
});


module.exports = router;
