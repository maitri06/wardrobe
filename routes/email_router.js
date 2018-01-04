var express=require('express');
var router=express.Router();
var user=require('../model/email_model');
router.post('/',function(req,res,next){

    user.sendMail(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(
                {
                    success:true,
                    msg:'sent'
                }
            );
        }
    });
});
module.exports=router;