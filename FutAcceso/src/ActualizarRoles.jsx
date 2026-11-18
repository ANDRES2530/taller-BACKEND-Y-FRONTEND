import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function ActualizarRoles(){
        const [nombre,setNombre]=useState("")
        const [descripcion,setDescripcion]=useState("")
        const [id_usuario,setIdUsuario]=useState("")
        let {id}=useParams()
        let navigate=useNavigate()
        async function actualizar(){
            alert(id)
            let respuestas=await fetch("http://localhost:9000/Api/actualizar/"+id,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    nombre:nombre,
                    descripcion:descripcion,
                    id_usuario:id_usuario
                })     
            })
            let res=await respuestas.json()
            alert(res.mensaje)
            navigate("/tabla")
            
        }
    return(
        <div>
            <h1>actualizar Roles</h1>
            <div>
                <input placeholder="escriba nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input placeholder="escriba descripcion" onChange={(e)=>setDescripcion(e.target.value)}></input>
                <input placeholder="escriba id_usuario" onChange={(e)=>setIdUsuario(e.target.value)}></input>
                <button onClick={actualizar}>guardar</button>
            </div>
        </div>
    )
}
export default ActualizarRoles