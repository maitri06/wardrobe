
var express=require('express');
var router=express.Router();
var category=require('../model/cat_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        category.getCatById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    category.getAllCat(function(err,rows){

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

    category.addCat(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    
        category.deleteCat(req.params.id,function(err,rows){
    
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