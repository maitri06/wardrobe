var express=require('express');
var router=express.Router();
var bill=require('../model/bill_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        bill.getBillById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    bill.getAllBill(function(err,rows){

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

    bill.addBill(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    
        bill.deleteBill(req.params.id,function(err,rows){
    
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