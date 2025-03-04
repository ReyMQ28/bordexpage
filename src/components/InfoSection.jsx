"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BotonLeerMas from "/src/components/BotonLeerMas";

function InfoSection() {
  return (
    <div className="w-full mb-20 relative">
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
          <BotonLeerMas />
          <h1 className="text-7xl md:text-7xl font text-center font-semibold text-white mb-6">
            Gestión de Inventarios Simplificada
          </h1>
          <h2 className="text-lg md:text-xl text-center text-gray-300 mt-4 mx-32 mb-6">
            Optimiza tus procesos con Bordex, la herramienta ideal para el
            control eficiente de inventarios.
          </h2>
          <div className="flex gap-4 mt-6 w-auto">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-lg">
              Explorar Funciones
            </button>
            <button className="flex flex-row items-center justify-center text-white py-2 px-8 rounded-lg hover:bg-white/10 ">
              <p className="font-bold">Conoce Más </p>{" "}
              <ArrowRight className="w-4 h-4 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
