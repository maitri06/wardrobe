var db=require('../dbconnection');
var feedback={

    getAllFeedback:function(callback){

        return db.query("select * from feedback_tbl",callback);
    },
    getFeedbackById:function(id,callback){

        return db.query("select * from feedback_tbl where pk_f_id=?",[id],callback);
    },
    addFeedback:function(feed,callback){
        return db.query("insert into feedback_tbl values(?,?,?,?,?)",[feed.pk_f_id,feed.f_title,feed.f_desc,feed.fk_email_id,feed.fk_pro_id],callback);
    },
    deleteFeedback:function(id,callback){
        return db.query("delete from feedback_tbl where pk_f_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
    deleteAll:function(feed,callback)
    {

    var delarr=[];
        for(i=0;i<feed.length;i++){
    
            delarr[i]=feed[i].pk_f_id;
        }
        return db.query("delete from feedback_tbl where pk_f_id in (?)",[delarr],callback);
     }
   
   
};

module.exports=feedback;