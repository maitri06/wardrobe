
var db=require('../dbconnection');
var category={

    getAllCat:function(callback){

        return db.query("select * from cat_tbl",callback);
    },
    getCatById:function(id,callback){

        return db.query("select * from cat_tbl where pk_cat_id=?",[id],callback);
    },
    addCat:function(cat,callback){
        return db.query("insert into cat_tbl values(?,?)",[null,cat.cat_name],callback);
    },
    deleteCat:function(id,callback){
        return db.query("delete from cat_tbl where pk_cat_id=?",[id],callback);
    },
   /*updateCat:function(id,cat,callback){
        return db.query("update cat_tbl set name=? where cat_id=?",[cat.name,id],callback);
    }*/
   
};

module.exports=category;