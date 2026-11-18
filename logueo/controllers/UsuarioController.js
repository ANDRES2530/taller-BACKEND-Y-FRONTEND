const conectar=require('../conexion/db')

class UsuarioControllers{

    ver=async(req,res)=>{
        let [respuesta]=await conectar.query("SELECT id,nombre,apellido,direccion,telefono,correo FROM usuarios")
        return res.json(respuesta)
    }

    actualizar=async(req,res)=>{
        let {id}=req.params
        let {nombre,apellido,direccion,telefono,correo}=req.body
        await conectar.query("UPDATE usuarios SET nombre=?,apellido=?,direccion=?,telefono=?,correo=? WHERE id=?",
            [nombre,apellido,direccion,telefono,correo,id]
        )
        return res.json({mensaje:"usuario actualizado correctamente"})
    }

    eliminar=async(req,res)=>{
        let {id}=req.params
        await conectar.query("DELETE FROM usuarios WHERE id=?",[id])
        return res.json({mensaje:"usuario eliminado correctamente"})
    }
}

module.exports = UsuarioControllers
