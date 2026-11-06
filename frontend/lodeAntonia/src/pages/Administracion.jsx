import { useEffect, useState } from "react"


const API_URL = "http://localhost:8080";


export const Administracion = () => {

    const [cabanas, setCabanas] = useState([]);

    const [addCabana, setAddCabana] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        capacidad: ""
    })

    const [archivos, setArchivos] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        const nuevaCabana = { ...addCabana, [e.target.name]: e.target.value }
        setAddCabana(nuevaCabana);
    }



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

    const subirArchivo = (archivo) => {
        const datos = new FormData();
        datos.append("archivo",archivo);
        return fetch(`${API_URL}/imagenes/subir`,{
            method:"POST",
            body:datos
        })
            .then(res => {
                if(!res.ok) throw new Error("No se pudo agregar el arhivo");
                return res.text();
            });
    }

    const registrarImagen = (nombre, cabanId) => {
        return fetch(`${API_URL}/imagenes`, {
            method:"POST",
            headers:  { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: `${API_URL}/uploads/${nombre}`,
                cabana: {id: cabanId}
            })
        }).then(res => {
            if(!res.ok) throw new Error("No se pudo registrar la imagen");
            return res.json()
        })
    }

    const agregar = (e) => {
        e.preventDefault();
        const formulario = e.target;
        const cabanaNueva = {
            ...addCabana,
            precio: Number(addCabana.precio),
            capacidad: Number(addCabana.capacidad),
        }
        fetch(`${API_URL}/cabanas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cabanaNueva)
        })
            .then(res => {
                if (!res.ok) throw new Error("No se puede agregar!");
                return res.json()
            })
            .then(cabana => 
                Promise.all(archivos.map(a => subirArchivo(a)))
                    .then(nombres => Promise.all(nombres.map(n => registrarImagen(n, cabana.id))))
                    .then(()=> cabana)
            )
            .then(cabana => {
                setCabanas(prev => [...prev, cabana]);
                setAddCabana({
                    nombre: "",
                    precio: "",
                    descripcion: "",
                    capacidad: ""
                });
                setArchivos([]);
                formulario.reset();
                window.alert("La cabaña se agrego correctamente")
            })
            .catch(err => { console.error(err); window.alert("La cabaña no se puedo agregar") })
    }

    console.log(archivos)

    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-marronOscuro">Panel de administración</h1>
            <div className="flex flex-row items-center justify-center gap-20">
                <form action="" onSubmit={agregar} className="bg-arena rounded-2xl shadow-2xl w-100 flex flex-col items-center justify-center gap-2 py-2 px-2 text-marronOscuro">
                    <div className="flex flex-col items-start justify-center gap-2 text-base">
                        <label htmlFor="nombre" className="font-bold text-xs italic">Nombre:</label>
                        <input required id="nombre" type="text" name="nombre" onChange={handleChange} placeholder="Ingrese el nombre" value={addCabana.nombre} className="border rounded-2xl py-2 px-2" />
                        <label htmlFor="precio" className="font-bold text-xs italic">Precio:</label>
                        <input required id="precio" type="number" name="precio" onChange={handleChange} placeholder="Ingrese el precio" value={addCabana.precio} className="border rounded-2xl py-2 px-2" />
                        <label htmlFor="capacidad" className="font-bold text-xs italic">Capacidad:</label>
                        <input required id="capacidad" type="number" name="capacidad" onChange={handleChange} placeholder="Ingresa la capacidad" value={addCabana.capacidad} className="border rounded-2xl py-2 px-2" />
                        <label htmlFor="descripcion" className="font-bold text-xs italic">Descripcion:</label>
                        <textarea required id="descripcion" name="descripcion" onChange={handleChange} placeholder="Ingresa la descripcion" value={addCabana.descripcion} className="border rounded-2xl py-2 px-2" />
                        <label htmlFor="imagenes">Imagenes:</label>
                        <input type="file" id="imagenes" accept="image/*" multiple onChange={(e) => setArchivos(Array.from(e.target.files))} className="border rounded-2xl py-2 px-2" />
                    </div>
                    <button type="submit" className="cursor-pointer bg-marronClaro rounded-2xl h-10 w-40 py-2 px-2 m-2 text-blanco">Agregar Cabaña</button>
                </form>
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
                                            <button className="cursor-pointer bg-blue-600 rounded-2xl text-white w-20 h-8 text-sm">Editar</button>
                                            <button onClick={() => eliminar(id)} className=" cursor-pointer bg-red-600 rounded-2xl text-white w-20 h-8 text-sm">Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </section>
    )
}
