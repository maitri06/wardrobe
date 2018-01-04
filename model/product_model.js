var db=require('../dbconnection');
var product={

    getAllProduct:function(callback){

        return db.query("select * from pro_tbl",callback);
    },
    getProductById:function(id,callback){

        return db.query("select * from pro_tbl where pro_id=?",[id],callback);
    },
    addProduct:function(prod,callback){
        return db.query("insert into pro_tbl values(?,?,?,?,?,?,?,?,?)",[prod.pro_id,prod.name,prod.price,prod.color,prod.img1,prod.img2,prod.img3,prod.desci,prod.cat_id],callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from pro_tbl where pro_id=?",[id],callback);
    },
    updateProduct:function(id,prod,callback){
        console.log(prod.name);
        console.log(prod.price);
        console.log(prod.desci);
        return db.query("update pro_tbl set name=?,price=?,desci=? where pro_id=?",[prod.name,prod.price,prod.desci,id],callback);
    },
    getProductByCategoryId:function(callback){
        return db.query("select p.*,c.* from pro_tbl p,cat_tbl c where p.fk_cat_id=c.cat_id",callback);
    }
  
   
};

module.exports=product;