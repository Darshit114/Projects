const router = require('express').Router();

router.get('/',(req,res)=>{
    return res.json({
        status : "API working!!!",
        message : "Welcome to REST world Geeks!!!"
    });
});

module.exports = router;