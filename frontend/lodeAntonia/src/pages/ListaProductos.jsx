import { useEffect, useState } from "react";
import {API_URL} from "../config"

export const ListaProductos = () => {

    const [cabanas, setCabanas] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/cabanas`)
            .then(res => res.json())
            .then(data => setCabanas(data))
            .catch(err => console.error(err))
    }, [])

    const eliminar = (id) => {
        if (!window.confirm("Seguro que quieres eliminar esta cabaña?")) return

        fetch(`${API_URL}/cabanas/${id}`, { method: "DELETE" })
            .then(res => {
                if (!res.ok) throw new Error("No se pudo eliminar");
                setCabanas(prev => prev.filter(c => c.id !== id))
                alert("Cabaña eliminada correctamente");
            })
            .catch(err => console.error(err))
    }

    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h1>Listado de cabaña</h1>
            <table className="w-full mt-8 text-left border-b border-arena rounded-2xl">
                <thead>
                    <tr className="border-b border-arena">
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cabanas.map(({ id, nombre }) => (
                            <tr key={id} className="border-b border-arena">
                                <td className="py-3">{id}</td>
                                <td>{nombre}</td>
                                <td >
                                    <div className="flex flex-row gap-5">
                                        <button className="cursor-pointer bg-marronClaro rounded-2xl text-white w-20 h-8 text-sm">Editar</button>
                                        <button onClick={() => eliminar(id)} className=" cursor-pointer bg-marronOscuro text-blanco rounded-2xl texdt-white w-20 h-8 text-sm">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}
