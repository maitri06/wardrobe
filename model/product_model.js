var db=require('../dbconnection');
var product={

    getAllProduct:function(callback){

        return db.query("select * from pro_tbl",callback);
    },
    getProductById:function(id,callback){

        return db.query("select * from pro_tbl where pk_pro_id=?",[id],callback);
    },
    addProduct:function(prod,callback){
        return db.query("insert into pro_tbl values(?,?,?,?,?,?,?,?,?)",[null,prod.pro_name,prod.pro_price,prod.pro_color,prod.pro_img1,prod.pro_img2,prod.pro_img3,prod.pro_desci,prod.fk_cat_id],callback);
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