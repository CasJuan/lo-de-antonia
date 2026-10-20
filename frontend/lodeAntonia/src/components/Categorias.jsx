import { useState } from "react";
import { Heart, Users, Waves } from "lucide-react";

const categorias = [
  {
    nombre: "Familiares",
    descripcion: "Espacios amplios para compartir",
    icono: Users,
  },
  {
    nombre: "Románticas",
    descripcion: "Un rincón íntimo entre montañas",
    icono: Heart,
  },
  {
    nombre: "Con pileta",
    descripcion: "Descanso con agua y paisaje",
    icono: Waves,
  },
];

export const Categorias = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-8 pt-10 pb-16 px-6 bg-crema text-marronOscuro">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-title font-bold">Explorá por categorías</h2>
        <p className="text-marronClaro">
          Elegí el tipo de escapada que estás buscando
        </p>
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-5 max-w-5xl">
        {categorias.map(({ nombre, descripcion, icono: Icono }) => {

          return (
            <button
              key={nombre}
              type="button"

              className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 min-w-56 max-w-xs rounded-2xl p-5 cursor-pointer border text-left transition-all ${"bg-marronOscuro text-blanco border-marronOscuro shadow-md"
                }`}
            >
              <span
                className={`flex items-center justify-center rounded-full size-12 shrink-0 ${"bg-arena text-marronOscuro"
                  }`}
              >
                <Icono size={22} />
              </span>
              <span>
                <span className="block font-semibold">{nombre}</span>
                <span
                  className={`block text-sm mt-1 ${"text-marronClaro"
                    }`}
                >
                  {descripcion}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
