var express=require('express');
var router=express.Router();
var login=require('../model/login_model');

router.post('/',function(req,res,next){
   
        login.getAllUsers(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });

module.exports=router;
