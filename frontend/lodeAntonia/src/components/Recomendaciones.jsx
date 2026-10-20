import { useEffect, useState } from "react"

const API_URL = "http://localhost:8080";

export const Recomendaciones = () => {

    const [cabanas, setCabanas] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}/cabanas`)
            .then(res => res.json())
            .then(data => {
                const mezcladas = [...data].sort(() => Math.random() - 0.5);
                setCabanas(mezcladas.slice(0,10))
            }
            )
            .catch(err => console.log(err))

    }, [])

    return (
        <section className="flex flex-col items-center justify-center gap-8 bg-arena py-16 px-6">
            <p className="text-xs italic text-marronClaro">RECOMENDACIONES DESTACADAS</p>
            <h2 className="text-3xl font-title font-bold text-marronOscuro ">Santuarios Recomendados</h2>
            <p className="text-marronClaro">Cabañas seleccionadas que ofrecen tranquilidad inigualable, vistas alpinas y confort artesanal.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {cabanas.map(({nombre, capacidad, precio, id, descripcion}) => (
                    <div key={id} className="w-full h-auto p-5 justify-between bg-crema border-marronClaro/30 border rounded-2xl flex flex-col items-start min-h-50 gap-2 px-5">
                        <h3 className="text-xl">{nombre}</h3>
                        <p className="text-sm">{descripcion}</p>
                        <p className="text-sm font-bold italic">${precio.toLocaleString("es-AR")}</p>
                        <p className="bg-arena rounded-2xl px-3 text-sm text-marronOscuro">{capacidad} personas</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
