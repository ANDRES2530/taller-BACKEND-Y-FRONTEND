const conectar=require('../conexion/db')
const bcrypt=require('bcrypt')

class AccesoControllers{
    login=async(req,res)=>{
        let {correo,password}=req.body

        let [respuesta]=await conectar.query("SELECT * FROM usuarios WHERE correo=?",
            [correo]
        )

        if(respuesta.length==0){
            return res.json({mensaje:"correo o contraseña incorrectos"})
        }

        let valida=await bcrypt.compare(password,respuesta[0].password)

        if(!valida){
            return res.json({mensaje:"correo o contraseña incorrectos"})
        }

        return res.json({
            mensaje:"login correcto",
            usuario:{
                nombre:respuesta[0].nombre,
                apellido:respuesta[0].apellido
            }
        })
    }

    registrarse =async(req,res)=>{
        //hash=> encriptacion contraseñas
        //12345678=> jajbajaxbjasxxvasghcjas
        let {nombre,apellido,direccion,telefono,correo,password}=req.body
        let contrasena=await bcrypt.hash(password,10)
        let respuesta=await conectar.query("INSERT INTO usuarios(nombre,apellido,direccion,telefono,correo,password) VALUES(?,?,?,?,?,?)",
            [nombre,apellido,direccion,telefono,correo,contrasena]
        )
        return res.json({
            mensaje:"usuario registrado correctamente",
            usuario:{
                nombre:nombre,
                apellido:apellido
            }
        })
    }
}

module.exports = AccesoControllers