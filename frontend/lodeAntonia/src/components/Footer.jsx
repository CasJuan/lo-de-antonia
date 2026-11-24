import logo from "../assets/logo.svg"
export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-arena text-marronOscuro font-thin w-full border-t">
            <section className="flex flex-col gap-10 items-center w-full max-w-5xl px-6 mt-5 mb-5 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2 w-50">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img src={logo} alt="" className="w-6" />
                        <h4 className="text-xl font-bold font-title">Lo de Antonia</h4>
                    </div>
                    <p className="text-xs italic">
                        ©{new Date().getFullYear()} Lo de Antonia. Derechos reservados
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-auto">
                    <p className="text-sm font-bold">Link</p>
                    <ul className="text-xs flex flex-col gap-1 cursor-pointer">
                        <li>Cabañas</li>
                        <li>Experiencias</li>
                        <li>Dueños</li>
                        <li>Sustentabilidad</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 w-auto">
                    <p className="text-sm font-bold">Apoyo</p>
                    <ul className="text-xs flex flex-col gap-1 cursor-pointer">
                        <li>Contacto</li>
                        <li>Privacidad</li>
                        <li>Equipos</li>
                        <li>Información</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
