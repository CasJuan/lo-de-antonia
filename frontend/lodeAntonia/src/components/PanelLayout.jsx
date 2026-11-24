import { Outlet } from "react-router-dom"

export const PanelLayout = () => {
    return (
        <>
            <div className="block md:hidden">
                <h2 className="text-center py-6 text-xl font-thin text-marronOscuro">Las funciones de agregar y listar solo están disponibles en una PC</h2>
            </div>

            <div className="hidden md:block">
                <Outlet></Outlet>
            </div>
        </>
    )
}
