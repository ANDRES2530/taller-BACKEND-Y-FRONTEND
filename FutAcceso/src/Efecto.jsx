import { useEffect } from "react"
function Efecto(){
    useEffect(()=>{
        alert("el componente esta funcionando")
    },[])
    return(
        <div>
            <h1>hook useEfecti</h1>
        </div>
    )
}
export default Efecto