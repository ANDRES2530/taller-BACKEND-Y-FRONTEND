let mysql=require('mysql2')

let conectar=mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "senaCTPI",
    database: "acceso",
    port: "3306"
})

conectar.connect((error)=>{
    if(error){
        console.log("error db",error)
    }
    else{
        console.log("conexion exitosa")
    }
})

module.exports = conectar.promise()