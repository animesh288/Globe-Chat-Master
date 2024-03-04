const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>WaterMelon Sugar Hi!!!</h1>');
});

module.exports = router;