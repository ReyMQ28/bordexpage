"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BotonLeerMas from "/src/components/BotonLeerMas";

function InfoSection() {
  return (
    <container className="w-full ">
      <div className="w-full relative ">
        <Image
          className="w-full h-auto overflow-hidden filter brightness-50"
          src={"https://i.postimg.cc/YqXcyMBJ/ai-generated-8704020.jpg"}
          alt="Gestión de inventarios simplificada"
          layout="responsive"
          width={1680}
          height={1240}
        />

        <div className="absolute inset-0 bg-blue-700/30"></div>
        <div className="flex flex-col items-center justify-center absolute inset-0 mx-44">
          <BotonLeerMas />
          {/* Titulo */}
          <h1 className="sm:text-2xl text-7xl md:text-7xl font text-center font-semibold text-white mb-6">
            Gestión de Inventarios Simplificada
          </h1>
          {/* Descripcion */}
          <h2 className="sm:text-sm sm:w-72 smd:w-96 md:w-auto text-lg md:text-xl text-center text-gray-300 mt-4 mb-6">
            Optimiza tus procesos con Bordex, la herramienta ideal para el
            control eficiente de inventarios.
          </h2>
          {/* Botones */}
          <div className="flex sm:flex-col md:flex-row gap-4 mt-6 w-auto">
            {/* Boton 1 */}
            <button className="sm:text-sm sm:px-2 sm:w-36 sm:text-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-lg">
              Explorar Funciones
            </button>
            {/* Boton 2 */}
            <button className="flex flex-row items-center justify-center sm:text-sm sm:px-2 sm:text-center text-white py-2 px-8 rounded-lg hover:bg-white/10 ">
              <p className="font-bold">Conoce Más </p>{" "}
              <ArrowRight className="w-4 h-4 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />{" "}
            </button>
          </div>
        </div>
      </div>
    </container>
  );
}

export default InfoSection;
