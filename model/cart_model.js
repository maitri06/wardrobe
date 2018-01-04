var db=require('../dbconnection');
var cart={

    getAllCart:function(callback){

        return db.query("select * from cart_tbl",callback);
    },
    getCartById:function(id,callback){

        return db.query("select * from cart_tbl where cart_id=?",[id],callback);
    },
    addCart:function(car,callback){
        return db.query("insert into cart_tbl values(?,?,?,?)",[car.cart_id,car.qty,car.email_id,car.pro_id],callback);
    },
    deleteCart:function(id,callback){
        return db.query("delete from cart_tbl where cart_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
   
};

module.exports=cart;