var express=require('express');
var router=express.Router();
var product=require('../model/trend_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        product.gettProductById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        product.getAlltProduct(function(err,rows){

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