var db=require('../dbconnection');
var cart={

    getAllCart:function(callback){

        return db.query("select * from cart_tbl",callback);
    },
    getCartById:function(id,callback){

        return db.query("select * from cart_tbl where pk_cart_id=?",[id],callback);
    },
    addCart:function(car,callback){
        return db.query("insert into cart_tbl values(?,?,?,?,?)",[null,1,car.cart_amount,car.fk_email_id,car.fk_pro_id],callback);
    },
    deleteCart:function(id,callback){
        return db.query("delete from cart_tbl where pk_cart_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
    getProductforCart:function(callback){
        return db.query("select p.*,c.* from pro_tbl p,cart_tbl c where p.pk_pro_id=c.fk_pro_id",callback);
    },
    getCartByEmail:function(id,callback){

        return db.query("select * from cart_tbl where fk_email_id=?",[id],callback);
    },
    getCal:function(id,callback){

        return db.query("select * from cart_tbl where cart_amount=?",[id],callback);
    }
    
   
};

module.exports=cart;