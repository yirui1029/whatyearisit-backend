var express = require("express");
var router = express.Router();


router.get('/', (req, res) => {
    const Year = new Date().getFullYear().toString();
    console.log(Year);
    res.json({ year: Year });
   });
   
   module.exports = router;
