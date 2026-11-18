const conectar = require('../conexion/db')

class RolesControllers {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query("SELECT * FROM roles")
        return res.json(respuesta)
    }

    insertar = async (req, res) => {
        let { nombre, descripcion, id_usuarios } = req.body
        await conectar.query(
            "INSERT INTO roles(nombre, descripcion, id_usuarios) VALUES(?,?,?)",
            [nombre, descripcion, id_usuarios]
        )
        return res.json({ mensaje: "rol insertado correctamente" })
    }

    actualizar = async (req, res) => {
        let { id } = req.params
        let { nombre, descripcion, id_usuarios } = req.body
        let [respuesta] = await conectar.query(
            "UPDATE roles SET nombre=?, descripcion=?, id_usuarios=? WHERE id=?",
            [nombre, descripcion, id_usuarios, id]
        )

        if (respuesta.affectedRows > 0) {
            return res.json({ mensaje: "rol actualizado correctamente" })
        }
        return res.status(404).json({ mensaje: "no se encontró el rol" })
    }

    eliminar = async (req, res) => {
        let { id } = req.params
        let [respuesta] = await conectar.query("DELETE FROM roles WHERE id=?", [id])

        if (respuesta.affectedRows > 0) {
            return res.json({ mensaje: "rol eliminado correctamente" })
        }
        return res.status(404).json({ mensaje: "no se encontró el rol" })
    }
}

module.exports = RolesControllers