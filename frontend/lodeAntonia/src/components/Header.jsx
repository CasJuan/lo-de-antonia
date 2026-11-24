
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Cabañas", "Experiencias", "Sobre nosotros", "Dueños"]


export const Header = () => {
  const [abierto, setAbierto] = useState(false)
  return (
    <header className="sticky top-0 z-50 font-thin">
      <nav className="relative flex items-center justify-between px-4 md:px-8 py-4 md:py-6 text-blanco bg-marronClaro">

        <Link to="/" onClick={() => setAbierto(false)}>
          <div className="flex flex-row items-center gap-3">
            <img src={logo} alt="" className="w-12 md:w-20" />
            <div>
              <p className="text-xl md:text-2xl font-semibold font-title">Lo de Antonia</p>
              <p className="hidden sm:block text-xs font-thin italic">
                Uniendo el entorno natural con el confort moderno
              </p>
            </div>
          </div>
        </Link>

        <button
          type="button"
          className="md:hidden cursor-pointer"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`${abierto ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-marronClaro px-6 py-4 md:p-0 gap-4 md:gap-6 text-lg md:items-center shadow-lg md:shadow-none font-text`}
        >
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-marronOscuro hover:cursor-pointer hover:underline hover:underline-offset-8"
            >
              {link}
            </li>
          ))}
          <li>
            <button type="button" className="bg-marronOscuro rounded-2xl cursor-pointer px-3 py-2">
              Crear cuenta
            </button>
          </li>
          <li>
            <button type="button" className="bg-marronOscuro rounded-2xl cursor-pointer px-3 py-2">
              Iniciar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
