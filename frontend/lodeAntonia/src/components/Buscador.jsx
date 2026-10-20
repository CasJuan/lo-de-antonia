import { Search } from "lucide-react";

export const Buscador = () => {
  return (
    <section className="relative bg-crema">
      <form
        className="relative z-10 w-full max-w-3xl mx-auto -mt-10 px-4"
      >
        <div className="bg-blanco border border-arena shadow-lg rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <label className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-marronClaro pointer-events-none"
            />
            <input
              type="search"
              name="q"
              aria-label="Buscar cabañas"
              placeholder="Buscar cabaña"
              className="w-full rounded-2xl border border-arena bg-crema pl-11 pr-4 py-3 text-marronOscuro placeholder:text-marronClaro/80 outline-none transition focus:border-marronPrincipal focus:ring-2 focus:ring-marronPrincipal/25"
            />
          </label>
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 px-6 py-3 text-blanco flex items-center justify-center bg-marronOscuro rounded-2xl cursor-pointer gap-2 hover:bg-marronPrincipal transition-colors"
          >
            Buscar
            <Search size={16} />
          </button>
        </div>
      </form>
    </section>
  );
};
