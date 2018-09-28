const router = require('express').Router();

router.get('/allSliderImage', (req, res) => {
  console.log('Slider router');
  res.send(JSON.stringify([
    {
            src:'./../client/Images/Slider_Images/caroselfinal1.jpg',
    },
    {
            src:'./../client/Images/Slider_Images/caroselfinal2.jpg',
    },
    {
            src:'./../client/Images/Slider_Images/caroselfinal3.jpg',
    },
    {
            src:'./../client/Images/Slider_Images/caroselfinal4.jpg',
    },
    {
            src:'./../client/Images/Slider_Images/caroselfinal5.jpg',
    }
  ]));
});


module.exports = router;
