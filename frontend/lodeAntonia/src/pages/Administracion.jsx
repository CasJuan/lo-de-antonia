import { Link } from "react-router-dom"

export const Administracion = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-marronOscuro">Panel de administración</h1>
            <div className="flex-row items-center justify-center gap-10 py-5 flex">
                <Link to={`agregar`}>
                    <button className="bg-marronClaro rounded-2xl px-6 py-8 text-blanco cursor-pointer">Agregar cabaña</button>
                </Link>
                <Link to={`listado`}>
                    <button className="bg-marronClaro rounded-2xl px-6 py-8 text-blanco cursor-pointer">Listado de cabañas</button>
                </Link>
            </div>
        </section>
    )
}
