var db=require('../dbconnection');
var user={

    getAllUser:function(callback){

        return db.query("select * from user_tbl",callback);
    },
    getUserById:function(id,callback){

        return db.query("select * from user_tbl where email_id=?",[id],callback);
    },
    addUser:function(usr,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?,?,?,?)",[usr.email_id,usr.name,usr.password,usr.gender,usr.img,usr.mobile_no,usr.address,usr.type],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user_tbl where email_id=?",[id],callback);
    },
   updateUser:function(id,usr,callback){
        return db.query("update user_tbl set name=?,gender=? where email_id=?",[usr.name,usr.gender,id],callback);
    } ,
    deleteAll:function(usr,callback)
    {

    var delarr=[];
        for(i=0;i<usr.length;i++){
    
            delarr[i]=usr[i].email_id;
        }
        return db.query("delete from user_tbl where email_id in (?)",[delarr],callback);
     }
   
};

module.exports=user;