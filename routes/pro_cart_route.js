var express=require('express');
var router=express.Router();
var cart=require('../model/cart_model');

router.get('/',function(req,res,next){

    cart.getProductforCart(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;