import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const API_URL = "http://localhost:8080";

export const Detalle = () => {

    const {id} = useParams();
    const [cabana, setCabana] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/cabanas/${id}`)
        .then(res => {
            if(!res.ok) throw new Error("Cabaña no encontrada");
            return res.json()})
        .then(data => setCabana(data))
        .catch(() => setError(true))
    }, [id])
    
    if(error) return <p>No encontramos esa cabaña</p>
    if (!cabana) return <p>Cargando ...</p>

  return (
    <section className="min-h-[90vh] w-full">
        <div className="flex flex-row items-center justify-center gap-10 bg-arena">
            <div className="flex flex-col items-start justify-center w-80 min-h-[90vh]">
                <h2>{cabana.nombre}</h2>
                <p>{cabana.descripcion}</p>
            </div>
            <div className="bg-crema h-90 w-50 rounded-2xl shadow-2xs flex flex-col items-center justify-center">
                <p>${cabana.precio.toLocaleString("es-AR")}</p>
                <p>Capacidad: {cabana.capacidad}</p>
            </div>

        </div>
    </section>
  )
}
