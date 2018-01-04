var express=require('express');
var router=express.Router();
var feedback=require('../model/feedback_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        feedback.getFeedbackById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        feedback.getAllFeedback(function(err,rows){

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

    feedback.addFeedback(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    
    feedback.deleteFeedback(req.params.id,function(err,rows){
    
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