import { useEffect, useState } from "react"

function TablaUsuarios(){
    const [usuarios,setUsuarios]=useState([])
     const [nombre,setNombre]=useState("")
     const [apellido,setApellido]=useState("")
     const [direccion,setDireccion]=useState("")
     const [telefono,setTelefono]=useState("")
     const [correo,setCorreo]=useState("")
     const [password,setPassword]=useState("")
    useEffect(()=>{
        ver()
    },[])
    async function ver(){
        let respuesta=await fetch("http://localhost:9000/hl/ver")
        let datos=await respuesta.json();
        console.log(datos)
        setUsuarios(datos)
    }
    async function guardar(){
        let respuesta=await fetch("http://localhost:3000/Api/insertar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre,apellido,direccion,telefono,correo,password
            })
        })
        let datos=await respuesta.json()
        alert(datos)
    }
    return(
        <div>
           <h1>Gestion usuarios</h1> 
           <div>
                <input placeholder="escriba nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input placeholder="escriba apellido" onChange={(e)=>setApellido(e.target.value)}></input>
                <input placeholder="escriba direccion" onChange={(e)=>setDireccion(e.target.value)}></input>
                <input placeholder="escriba telefono" onChange={(e)=>setTelefono(e.target.value)}></input>
                <input placeholder="escriba correo" onChange={(e)=>setCorreo(e.target.value)}></input>
                <input type="password" placeholder="escriba password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button onclick={guardar}>guardar</button>
            </div>
           <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>direccion</th>
                        <th>telefono</th>
                        <th>correo</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((index)=>(
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.apellido}</td>
                            <td>{index.direccion}</td>
                            <td>{index.telefono}</td>
                            <td>{index.correo}</td>
                            <td>{index.password}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
        </div>
    )
}
export default TablaUsuarios