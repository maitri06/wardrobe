var db=require('../dbconnection');
var login={
    getAllUsers:function(log,callback){

        //console.log(log.email_id);
        console.log(log.password);
        return db.query("select * from user_tbl  where pk_email_id=? and u_password=?",[log.pk_email_id,log.u_password],callback);
    }
      
}

module.exports=login;