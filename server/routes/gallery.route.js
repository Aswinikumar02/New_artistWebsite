const router = require('express').Router();

router.get('/allGalleryImage', (req, res) => {
  console.log('category router');
  // res.send("categories");
  res.send(JSON.stringify([
    {
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqXZcOUsYQORMLjjn9LAngnOJ_Xzyb4y9HqZ1candCDM4jF3H",
            thumbnailWidth: 320,
            thumbnailHeight: 174
    },
    {
            thumbnail: "https://www.fotowalls.com/media/catalog/product/f/w/fw-1178-gs7-3d.png",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "https://cdn.shopify.com/s/files/1/2610/4034/products/FK-P-12X18-117.png?v=1525435306",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "https://www.fotowalls.com/media/catalog/product/f/w/fw-1178-gs7-3d.png",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },{
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174
    },
    {
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "https://cdn.shopify.com/s/files/1/2610/4034/products/FK-P-12X18-117.png?v=1525435306",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174
    },
    {
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            thumbnail: "https://cdn.shopify.com/s/files/1/2610/4034/products/FK-P-12X18-117.png?v=1525435306",
            thumbnailWidth: 304,
            thumbnailHeight: 346
    },
    {
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    }
  ]));
});


module.exports = router;
