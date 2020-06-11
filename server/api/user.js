const router = require('express').Router();
const Users =require('../db/user')
const { green, red } = require('chalk');


router.put('/',async (req,res)=>{
    try{
        const user=req.body;
        console.log(req.body)
        await Users.create(user);
        console.log(green("User added"));
        res.status(200);
    }catch(err){
        console.log(red('cant create user'),err);
    }
})

router.get('/',async (req,res)=>{
    const users=await Users.findAll();
    res.json(users);
})



module.exports = router;