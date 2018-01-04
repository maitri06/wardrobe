var db=require('../dbconnection');
var login={
    getAllUsers:function(log,callback){

        //console.log(log.email_id);
        console.log(log.password);
        return db.query("select * from user_tbl  where email_id=? and password=?",[log.email_id,log.password],callback);
    }
      
}

module.exports=login;