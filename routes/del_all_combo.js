var express=require('express');
var router=express.Router();
var combo=require('../model/combo_model');
router.post('/',function(req,res,next){

    combo.deleteAll(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;
