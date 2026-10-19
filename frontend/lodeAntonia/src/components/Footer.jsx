import logo from "../assets/logo.svg"
export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-5 bg-arena text-marronOscuro font-thin">
            <section className="flex flex-row gap-6 items-center justify-around  w-1/2 mt-5">
                <div className="flex flex-col gap-2 w-50">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img src={logo} alt="" className="w-6" />
                        <h4 className="text-xl font-bold font-title">Lo de Antonia</h4>
                    </div>
                    <p className="text-sm italic">Uniendo el entorno natural agreste con el confort moderno.</p>
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
                        <li>Informacion</li>
                    </ul>
                </div>
            </section>
            <div className="border-t-2 w-full text-center">
                <h5 className="text-sm font-bold mt-1">
                    © {new Date().getFullYear()} Lo de Antonia. Derechos reservados
                </h5>
            </div>
        </footer>
    )
}
