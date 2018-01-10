var db=require('../dbconnection');
var user={

    getAllUser:function(callback){

        return db.query("select * from user_tbl",callback);
    },
  
    getUserById:function(id,callback){

        return db.query("select * from user_tbl where pk_email_id=?",[id],callback);
    },
    addUser:function(usr,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?,?,?,?)",[usr.pk_email_id,usr.u_password,usr.u_name,usr.u_gender,usr.u_img,usr.u_mobile_no,usr.u_address,usr.u_type],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user_tbl where pk_email_id=?",[id],callback);
    },
   updateUser:function(id,usr,callback){
        return db.query("update user_tbl set u_name=?,u_gender=? where email_id=?",[usr.u_name,usr.u_gender,id],callback);
    } ,
    deleteAll:function(usr,callback)
    {

    var delarr=[];
        for(i=0;i<usr.length;i++){
    
            delarr[i]=usr[i].pk_email_id;
        }
        return db.query("delete from user_tbl where pk_email_id in (?)",[delarr],callback);
     }
   
};

module.exports=user;