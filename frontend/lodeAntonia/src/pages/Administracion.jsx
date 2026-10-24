import { useEffect, useState } from "react"


const API_URL = "http://localhost:8080";


export const Administracion = () => {

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
            <h1 className="text-3xl font-bold text-marronOscuro">Panel de administración</h1>

            <table className="w-full mt-8 text-left border-b border-arena ">
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
                                        <button>Editar</button>
                                        <button onClick={() => eliminar(id)} className="cursor-pointer">Eliminar</button>
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
