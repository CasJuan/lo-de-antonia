import { TentTree, Trees } from 'lucide-react'
import nosotros from "../assets/nosotros.jpg"

const beneficios = [
  {
    titulo: "Confort Curado",
    texto: "Blancos de primera calidad, leña de origen local para el fuego y amenidades artesanales.",
    icono: TentTree,
  },
  {
    titulo: "Integración de Bienestar",
    texto: "Saunas propios y tinas de hidromasaje al aire libre diseñados para una inmersión absoluta.",
    icono: Trees,
  },
];

export const Nosotros = () => {
  return (
    <section className="flex flex-col items-center bg-crema text-marronOscuro py-16 px-6 font-text">
      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={nosotros}
            alt="Cabaña rodeada de bosque"
            className="h-72 md:h-96 w-full rounded-2xl shadow-2xl object-cover"
          />
          <figure className="absolute -bottom-6 right-4 md:-right-4 max-w-56 bg-blanco border border-arena rounded-2xl shadow-lg p-4">
            <blockquote className="text-sm italic">
              “La experiencia más reconfortante que hemos vivido. Verdadera naturaleza refinada.”
            </blockquote>
          </figure>
        </div>

        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          <h2 className="text-3xl font-title font-bold">Más allá de la cabaña</h2>

          <p className="text-lg text-marronOscuro/90">
            Nuestros retiros no son solo un lugar para dormir. Ofrecemos experiencias curadas que conectan la autenticidad del entorno agreste con el confort moderno. Desde cenas con chef privado hasta baños de bosque guiados.
          </p>

          <ul className="flex flex-col gap-5">
            {beneficios.map(({ titulo, texto, icono: Icono }) => (
              <li key={titulo} className="flex flex-row items-start gap-4">
                <span className="bg-arena rounded-2xl size-10 shrink-0 flex items-center justify-center">
                  <Icono size={19} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{titulo}</h3>
                  <p className="text-sm text-marronOscuro/80">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
