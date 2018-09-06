const router = require('express').Router();

router.get('/allCorporateImage', (req, res) => {
  console.log('category router');
  // res.send("categories");
  res.send(JSON.stringify([
    {
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQvrOyHjf3YxNdSBW7h4vR155Bjq-l7Tb4JEgpO2KESa7bRhcmg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            thumbnailCaption:'123'

    },
    {
            thumbnail: "http://sf.co.ua/14/01/wallpaper-1937649.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            thumbnailCaption:'123'
    },

    {
            thumbnail: "http://www.balodia.in/gallery/550e6424bb3ee.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            thumbnailCaption:'123'
    },
    {
            thumbnail: "http://polkacafe.s3.amazonaws.com/articles/thumbs/ti_725_8720.2189075241.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 412,
            thumbnailCaption:'123'
    }
  ]));
});


module.exports = router;
