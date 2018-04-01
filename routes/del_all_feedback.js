var express=require('express');
var router=express.Router();
var feed=require('../model/feedback_model');
router.post('/',function(req,res,next){

    feed.deleteAll(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;
