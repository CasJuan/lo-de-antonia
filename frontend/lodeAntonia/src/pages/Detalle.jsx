import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:8080";

export const Detalle = () => {
  const { id } = useParams();
  const [cabana, setCabana] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/cabanas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Cabaña no encontrada");
        return res.json();
      })
      .then((data) => setCabana(data))
      .catch(() => setError(true));
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

  return (
    <section className="min-h-[80vh] w-full bg-crema text-marronOscuro py-16 px-6 flex items-center">
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
