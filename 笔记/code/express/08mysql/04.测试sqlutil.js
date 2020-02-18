const sqlutils = require('./sqlutil')
console.log(sqlutils);
sqlutils.doSQL("select id,name from users",(err,data)=>{
    if(err) {console.log(err)} 
    else {
        console.log(data)
    }
})