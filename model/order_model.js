var db=require('../dbconnection');
var order={

    getAllOrder:function(callback){

        return db.query("select * from order_tbl",callback);
    },
    getOrderById:function(id,callback){

        return db.query("select * from order_tbl where order_id=?",[id],callback);
    },
    addOrder:function(ord,callback){
        return db.query("insert into order_tbl values(?,?,?,?,?)",[ord.order_id,ord.date,ord.qty,ord.email_id,ord.pro_id],callback);
    },
    deleteOrder:function(id,callback){
        return db.query("delete from order_tbl where order_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
   
};

module.exports=order;