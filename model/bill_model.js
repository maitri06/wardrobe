
var db=require('../dbconnection');
var bill={

    getAllBill:function(callback){

        return db.query("select * from bill_tbl",callback);
    },
    getBillById:function(id,callback){

        return db.query("select * from bill_tbl where pk_bill_id=?",[id],callback);
    },
    addBill:function(bi,callback){
        return db.query("insert into bill_tbl values(?,?,?,?,?,?)",[bi.pk_bill_id,bi.bill_type,bi.bill_amount,bi.bill_date,bi.fk_email_id,bi.fk_pro_id],callback);
    },
    deleteBill:function(id,callback){
        return db.query("delete from bill_tbl where pk_bill_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
   
};

module.exports=bill;