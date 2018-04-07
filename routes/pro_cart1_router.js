var express=require('express');
var router=express.Router();
var cart=require('../model/cart_model');



router.get('/:id?',function(req,res,next){
    if(req.params.id){
    
        cart.getCartByProduct(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        cart.getProductforCart(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    
});


module.exports=router;