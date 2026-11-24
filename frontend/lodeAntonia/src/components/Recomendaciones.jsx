import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {API_URL} from "../config"

const mezclar = (lista) => {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
};

export const Recomendaciones = () => {

    const [cabanas, setCabanas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const POR_PAGINA = 10;
    const inicio = (pagina - 1) * POR_PAGINA;
    const totalPaginas = Math.ceil(cabanas.length / POR_PAGINA);
    const cabanasPagina = cabanas.slice(inicio, inicio + POR_PAGINA);

    useEffect(() => {

        fetch(`${API_URL}/cabanas`)
            .then(res => res.json())
            .then(data => {
                setCabanas(mezclar(data));
            }
            )
            .catch(err => console.log(err))

    }, [])

    

    return (
        <section className="flex flex-col items-center justify-center gap-8 bg-arena py-16 px-6 font-text">
            <p className="text-xs italic text-marronClaro">RECOMENDACIONES DESTACADAS</p>
            <h2 className="text-3xl font-title font-bold text-marronOscuro ">Santuarios Recomendados</h2>
            <p className="text-marronClaro">Cabañas seleccionadas que ofrecen tranquilidad inigualable, vistas alpinas y confort artesanal.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                {cabanasPagina.map(({ nombre, capacidad, precio, id, descripcion }) => (
                    <Link key={id} to={`/cabanas/${id}`} >
                        <div className="w-full h-auto p-5 justify-between bg-crema border-marronClaro/30 border rounded-2xl flex flex-col items-start min-h-50 gap-2 px-5">
                            <h3 className="text-xl">{nombre}</h3>
                            <p className="text-sm">{descripcion}</p>
                            <p className="text-sm font-bold italic">${precio.toLocaleString("es-AR")}</p>
                            <p className="bg-arena rounded-2xl px-3 text-sm text-marronOscuro">{capacidad} personas</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <button onClick={() => {
                    if (pagina === 1) return;
                    setPagina(pagina - 1)
                }
                }>Atras</button>

                <p className="font-thin text-sm">Página {pagina} de {totalPaginas}</p>

                <button onClick={() => {
                    if (pagina === totalPaginas) return;
                    setPagina(pagina + 1)
                }
                }>Adelante</button>

                <button onClick={() => setPagina(1)}>Volver al inicio</button>
            </div>
        </section>
    )
}
