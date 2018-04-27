var db=require('../dbconnection');
var product={

    getAlltProduct:function(callback){

        return db.query("select * from pro_tbl1",callback);
    },
    gettProductById:function(id,callback){

        return db.query("select * from pro_tbl1 where pk_t_id=?",[id],callback);
    }
};

module.exports=product;