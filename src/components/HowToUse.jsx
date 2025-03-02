import { FaUserPlus, FaCogs, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "Regístrate",
    description:
      "Crea tu cuenta en Bordex y accede a todas las funcionalidades.",
  },
  {
    icon: FaCogs,
    title: "Configura tu Inventario",
    description:
      "Agrega productos y genera códigos QR para un control eficiente.",
  },
  {
    icon: FaChartLine,
    title: "Monitorea y Optimiza",
    description:
      "Usa los reportes y análisis para mejorar tus procesos de inventario.",
  },
];

export default function HowToUse() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-2xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-7">
              Cómo Usar Bordex
            </h2>
            <p className="mx-auto max-w-[580px] text-muted-foreground md:text-base">
              Sigue estos pasos para implementar Bordex en tu negocio y
              maximizar la eficiencia.
            </p>
          </div>
        </div>
        <div className="mt-16 relative flex justify-center ">
          {/* Linea Vertical segmentada */}
          <div className="absolute left-[37%] top-0 bottom-0 w-px border-l-2 border-dashed border-primary/20 text-gray-400 hidden md:block" />

          <div className="space-y-14 flex flex-col items-start justify-center max-w-[400px] mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-start gap-8"
              >
                <div className=" w-16 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex flex-col items-center justify-center  z-10">
                    <step.icon className="w-8 h-8 text-blue-950" />
                  </div>
                </div>
                <div className="flex flex-col items-center  justify-center md:items-start space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
