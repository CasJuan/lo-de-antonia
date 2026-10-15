import portada from "../assets/portada.jpg";

export const Hero = () => {
    return (
      <section
        className="relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex items-start justify-center gap-6 flex-col flex-1 px-8 max-w-2xl">
          <h2 className="text-5xl font-bold text-blanco">
            Vida en la naturaleza con un toque de refinamiento
          </h2>
          <p className="text-lg text-blanco">
            Vive la belleza agreste de las montañas desde la comodidad de nuestras
            cabañas prémium, seleccionadas minuciosamente. La hospitalidad se une
            a la exclusividad.
          </p>
        </div>
      </section>
    );
  };
