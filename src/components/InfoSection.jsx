import Image from "next/image";
import { ArrowRight } from "lucide-react";

function InfoSection() {
  return (
    <div className="w-full mb-12 pb-16 relative">
      <div className="w-full relative">
        <Image
          className="w-full h-auto overflow-hidden filter brightness-50"
          src={"https://i.postimg.cc/YqXcyMBJ/ai-generated-8704020.jpg"}
          alt="Gestión de inventarios simplificada"
          layout="responsive"
          width={1080}
          height={640}
        />

        <div className="absolute inset-0 bg-blue-700/30"></div>
        <div className="flex flex-col items-center justify-center absolute inset-0 mx-44">
          <div className="bg-transparent rounded-full border border-gray-400 mb-6 flex items-center justify-center w-auto ">
            <span className="text-slate-400 hover:text-white text-sm flex flex-row items-center justify-center px-3 py-2">
              Descubre nuestras ultimas actulizaciones de funciones. {" "}
              <p className="font-bold text-white ml-1 hover:cursor-pointer">Leer más</p> <ArrowRight className="w-3 h-3 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />
            </span>
          </div>
          <h1 className="text-7xl md:text-7xl font text-center font-semibold text-white mb-6">
            Gestión de Inventarios Simplificada
          </h1>
          <h2 className="text-lg md:text-xl text-center text-gray-300 mt-4 mx-32 mb-6">
            Optimiza tus procesos con Bordex, la herramienta ideal para el
            control eficiente de inventarios.
          </h2>
          <div className="flex gap-5 mt-6 w-auto   ">
            <button className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-2 rounded-lg">Explorar Funciones</button>
            <button className="flex flex-row items-center justify-center text-white py-3 rounded"><p className="font-bold">Conoce Más </p> <ArrowRight className="w-4 h-4 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
