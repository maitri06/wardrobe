var express=require('express');
var router=express.Router();
var order=require('../model/order_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        order.getOrderById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        order.getAllOrder(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});

router.post('/',function(req,res,next){

    order.addOrder(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    
    order.deleteOrder(req.params.id,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
 /*router.update('/',function(req,res,next){
        
            category.updateCat(req.body,function(err,rows){
        
                if(err){
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
  });*/
        

module.exports=router;