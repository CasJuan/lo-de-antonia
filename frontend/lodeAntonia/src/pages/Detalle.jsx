import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:8080";

export const Detalle = () => {
  const { id } = useParams();
  const [cabana, setCabana] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(false);
  const [mostrarMas, setMostrarMas] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(`${API_URL}/cabanas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Cabaña no encontrada");
        return res.json();
      })
      .then((data) => setCabana(data))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    fetch(`${API_URL}/cabanas/${id}/imagenes`)
      .then((res) => res.json())
      .then((data) => setImagenes(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (error) {
    return (
      <p className="min-h-[50vh] flex items-center justify-center bg-crema text-marronOscuro">
        No encontramos esa cabaña
      </p>
    );
  }

  if (!cabana) {
    return (
      <p className="min-h-[50vh] flex items-center justify-center bg-crema text-marronClaro">
        Cargando...
      </p>
    );
  }

  const grilla = imagenes.slice(1, 5);

  return (
    <section className="min-h-[80vh] w-full bg-crema text-marronOscuro py-16 px-6 flex flex-col items-center gap-10">

      <div className="relative grid grid-cols-2 grid-rows-1 gap-4 w-full max-w-5xl h-64 md:h-96">

        {imagenes[0] ? (
          <img
            src={imagenes[0].url}
            alt={cabana.nombre}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full bg-arena rounded-2xl flex items-center justify-center text-marronClaro">
            No hay imágenes
          </div>
        )}

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full min-h-0">
          {grilla.map((imagen) => (
            <img
              key={imagen.id}
              src={imagen.url}
              alt={cabana.nombre}
              className="w-full h-full min-h-0 object-cover rounded-2xl"
            />
          ))}
        </div>

        {imagenes.length > 0 && (
          <button
            type="button"
            className="absolute bottom-3 right-3 bg-blanco/90 text-marronOscuro text-sm font-semibold rounded-2xl px-4 py-2 shadow cursor-pointer"
            onClick={() => setMostrarMas(!mostrarMas)}
          >
            Ver más
          </button>
        )}
      </div>

      {mostrarMas && (
        <div className="fixed inset-0 z-55 overflow-y-auto bg-black/80 backdrop-blur-sm p-4">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">

            <div className="sticky top-0 z-10 flex justify-between items-center py-2 px-4 bg-black/60 rounded-2xl">
              <p className="text-2xl font-title font-bold text-blanco">Galería</p>
              <button
                type="button"
                className="bg-blanco/90 text-marronOscuro text-sm font-semibold rounded-2xl px-4 py-2 shadow cursor-pointer"
                onClick={() => setMostrarMas(false)}
              >
                Cerrar
              </button>
            </div>

            {imagenes.map((imagen) => (
              <img
                key={imagen.id}
                src={imagen.url}
                alt={cabana.nombre}
                className="w-full rounded-2xl object-cover"
              />
            ))}

          </div>
        </div>
      )}


      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-title font-bold">{cabana.nombre}</h2>
          <p className="text-lg leading-relaxed text-marronOscuro/90">
            {cabana.descripcion}
          </p>
        </div>

        <div className="bg-blanco border border-arena rounded-2xl shadow-md flex flex-col items-center justify-center gap-3 px-10 py-12 min-w-64">
          <p className="text-3xl font-semibold">
            ${cabana.precio.toLocaleString("es-AR")}
          </p>
          <p className="bg-arena rounded-2xl px-4 py-1 text-sm">
            Capacidad: {cabana.capacidad}
          </p>
        </div>
      </div>
    </section>
  );
};