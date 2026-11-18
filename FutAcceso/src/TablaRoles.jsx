import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function TablaRoles(){
    const [rol,setRol]=useState([])
    const [nombre,setNombre]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [id_usuario,setIdUsuario]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        traerDatos()
    },[])

    async function traerDatos(){
        let respuesta=await fetch("http://localhost:9000/Api/verlo")
        let datos=await respuesta.json();
        console.log(datos)
        setRol(datos)
    }

    async function guardar(){
        let respuesta=await fetch("http://localhost:9000/Api/inserta",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                descripcion:descripcion,
                id_usuario:id_usuario
            })
        })
        let datos=await respuesta.json()
        console.log("aaaaaaaaaa"+datos)
        alert(datos.mensaje)
        traerDatos()
    }

    function llevarActualizar(id){
        navigate("/actualizar/"+id)
    }

    async function eliminar(id){
        alert(id)
        let respuesta=await fetch("http://localhost:9000/Api/eliminar/"+id,{
            method:"DELETE"
        })
        let msj=await respuesta.json()
        alert(msj.mensaje)
        traerDatos()
    }

    return(
        <div>
            <h1>Gestion Roles</h1>
            <div>
                <input placeholder="escriba nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input placeholder="escriba descripcion" onChange={(e)=>setDescripcion(e.target.value)}></input>
                <input placeholder="escriba id_usuario" onChange={(e)=>setIdUsuario(e.target.value)}></input>
                <button onClick={guardar}>guardar</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre Rol</th>
                        <th>descripcion</th>
                        <th>Id Usuarios</th>
                        <th>eliminar</th>
                        <th>actualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {rol.map((index)=>(
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.descripcion}</td>
                            <td>{index.id_usuarios}</td>
                            <td><button onClick={() => eliminar(index.id)}>eliminar</button></td>
                            <td><button onClick={()=>llevarActualizar (index.id)}>actualizar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TablaRoles