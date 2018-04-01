var db=require('../dbconnection');
var combo={

    getAllCombo:function(callback){

        return db.query("select * from combo_tbl",callback);
    },
    getComboById:function(id,callback){

        return db.query("select * from combo_tbl where pk_combo_id=?",[id],callback);
    },
    addCombo:function(comb,callback){
        return db.query("insert into combo_tbl values(?,?,?,?,?,?)",[null,comb.combo_name,comb.combo_img1,comb.combo_img2,comb.combo_img3,comb.combo_price],callback);
    },
    deleteCombo:function(id,callback){
        return db.query("delete from combo_tbl where pk_combo_id=?",[id],callback);
    },
    updateCombo:function(id,comb,callback){
        console.log(comb.combo_name);
        console.log(comb.combo_price);
        return db.query("update combo_tbl set combo_name=?,combo_price=? where pk_combo_id=?",[comb.combo_name,comb.combo_price,id],callback);
    },
    deleteAll:function(comb,callback)
    {

    var delarr=[];
        for(i=0;i<comb.length;i++){
    
            delarr[i]=comb[i].pk_combo_id;
        }
        return db.query("delete from combo_tbl where pk_combo_id in (?)",[delarr],callback);
     }
   
};

module.exports=combo;