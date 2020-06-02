const router = require('express').Router();


router.get('/',(req,res,next)=>{
    res.send('HeyHo!');
})

module.exports = router;