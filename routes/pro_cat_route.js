var express=require('express');
var router=express.Router();
var product=require('../model/product_model');

router.get('/',function(req,res,next){

    product.getProductByCategoryId(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;