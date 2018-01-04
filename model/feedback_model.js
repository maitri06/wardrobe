var db=require('../dbconnection');
var feedback={

    getAllFeedback:function(callback){

        return db.query("select * from feedback_tbl",callback);
    },
    getFeedbackById:function(id,callback){

        return db.query("select * from feedback_tbl where f_id=?",[id],callback);
    },
    addFeedback:function(feed,callback){
        return db.query("insert into feedback_tbl values(?,?,?,?)",[feed.f_id,feed.desc,feed.email_id,feed.pro_id],callback);
    },
    deleteFeedback:function(id,callback){
        return db.query("delete from feedback_tbl where f_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
   
};

module.exports=feedback;