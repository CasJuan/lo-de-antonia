

const links = ["Cabañas", "Experiencias", "Sobre nosotros", "Dueños"]


export const Header = () => {
  return (
    <heade className="sticky top-0 z-50">
      <nav className="flex items-center justify-between  px-8 py-6 text-blanco bg-marronClaro">
        <h1 className="text-2xl font-semibold">Lo de Antonia</h1>
        <ul className="flex gap-6 text-lg items-center">
          {
            links.map(link => (
              <li key={link} className="hover:text-marronOscuro hover:cursor-pointer hover:underline">{
                link
              }</li>
            ))
          }
          <li className="bg-marronOscuro rounded-2xl cursor-pointer p-2">Crear cuenta</li>
          <li className="bg-marronOscuro rounded-2xl cursor-pointer p-2">Iniciar sesión</li>
        </ul>
      </nav>
    </heade>
  );
};
