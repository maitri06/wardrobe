var express=require('express');
var router=express.Router();
var combo=require('../model/combo_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        combo.getComboById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        combo.getAllCombo(function(err,rows){

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

    combo.addCombo(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    
    combo.deleteCombo(req.params.id,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
    router.put('/:id',function(req,res,next){
        
        combo.updateCombo(req.params.id,req.body,function(err,rows){
    
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
module.exports=router;