var db=require('../dbconnection');
var product={

    getAllProduct:function(callback){

        return db.query("select * from pro_tbl",callback);
    },
    getProductById:function(id,callback){

        return db.query("select * from pro_tbl where pk_pro_id=?",[id],callback);
    },
    addProduct:function(prod,callback){
        return db.query("insert into pro_tbl values(?,?,?,?,?,?,?,?,?,?,?)",[null,prod.pro_name,prod.pro_price,prod.pro_color,prod.pro_img1,prod.pro_img2,prod.pro_img3,prod.pro_desci,prod.pro_brand,prod.pro_gen,prod.fk_cat_id],callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from pro_tbl where pk_pro_id=?",[id],callback);
    },
    updateProduct:function(id,prod,callback){
        console.log(prod.pro_name);
        console.log(prod.pro_price);
        console.log(prod.pro_desci);
        return db.query("update pro_tbl set pro_name=?,pro_price=?,pro_desci=? where pk_pro_id=?",[prod.pro_name,prod.pro_price,prod.pro_desci,id],callback);
    },
    getProductByCategoryId:function(callback){
        return db.query("select p.*,c.* from pro_tbl p,cat_tbl c where p.fk_cat_id=c.pk_cat_id",callback);
    },
   

    getProductByPrice1:function(callback){
        return db.query("select * from pro_tbl p JOIN cat_tbl c ON p.fk_cat_id=c.pk_cat_id WHERE p.pro_price BETWEEN 499 AND 999",callback);
    },
    getProductByPrice2:function(callback){
        return db.query("select * from pro_tbl p JOIN cat_tbl c ON p.fk_cat_id=c.pk_cat_id WHERE p.pro_price BETWEEN 1000 AND 1499",callback);
    },
    getProductByPrice3:function(callback){
        return db.query("select * from pro_tbl p JOIN cat_tbl c ON p.fk_cat_id=c.pk_cat_id WHERE p.pro_price BETWEEN 1500 AND 1999",callback);
    },
    getProductByPrice4:function(callback){
        return db.query("select * from pro_tbl p JOIN cat_tbl c ON p.fk_cat_id=c.pk_cat_id WHERE p.pro_price BETWEEN 2000 AND 2999",callback);
    },
    getProductByPrice5:function(callback){
        return db.query("select * from pro_tbl p JOIN cat_tbl c ON p.fk_cat_id=c.pk_cat_id WHERE p.pro_price BETWEEN 3000 AND 5999",callback);
    },
    getProductByCategoryName:function(id,callback){
        return db.query("select p.*,c.* from pro_tbl p,cat_tbl c where p.fk_cat_id=c.pk_cat_id and c.cat_name=?",[id],callback);
    },/*
   getProductByGen:function(id,callback){
        return db.query("select p.*,c.* from pro_tbl p,cat_tbl c where p.fk_cat_id=c.pk_cat_id and p.pro_gen=?",[id],callback);
    },*/
    getProductByBrandName:function(id,callback){
        return db.query("select p.*,c.* from pro_tbl p,cat_tbl c where p.fk_cat_id=c.pk_cat_id and p.pro_brand=?",[id],callback);
    },
    deleteAll:function(prod,callback)
    {

    var delarr=[];
        for(i=0;i<prod.length;i++){
    
            delarr[i]=prod[i].pk_pro_id;
        }
        return db.query("delete from pro_tbl where pk_pro_id in (?)",[delarr],callback);
     }
   
};

module.exports=product;