import { FaUserPlus, FaCogs, FaChartLine } from "react-icons/fa";

export default function Caracteristics() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-around space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-7 max-w-full md:max-w-[450px] mx-5 gap-2">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mt-3 text-slate-800">
              Over 45,000 clients and counting.
            </h2>
            <p className="max-w-full md:max-w-[580px] text-gray-600 md:text-lg font-medium">
              Sigue estos pasos para implementar Bordex en tu negocio y maximizar la eficiencia.
            </p>
            <p className="w-40 text-slate-800 md:text-lg font-semibold border-b-2 border-slate-800 hover:text-sky-600 hover:border-sky-600 cursor-pointer">
              Request a Callback
            </p>
          </div>
          <div className="mt-16 md:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex flex-col max-w-full md:max-w-[280px] justify-center items-start gap-4 m-4">
              <div className="w-16 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex flex-col items-center justify-center z-10">
                  <FaUserPlus className="w-6 h-6 text-rose-600" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:items-start space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Expert Advisor</h3>
                  <p className="text-gray-600 font-medium">
                    Crea tu cuenta en Bordex y accede a todas las funcionalidades.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-full md:max-w-[280px] justify-center items-start gap-4 m-4">
              <div className="w-16 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex flex-col items-center justify-center z-10">
                  <FaCogs className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:items-start space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Effective Support</h3>
                  <p className="text-gray-600 font-medium">
                    Crea tu cuenta en Bordex y accede a todas las funcionalidades.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-full md:max-w-[280px] justify-center items-start gap-4 m-4">
              <div className="w-16 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex flex-col items-center justify-center z-10">
                  <FaChartLine className="w-6 h-6 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:items-start space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Low Fees</h3>
                  <p className="text-gray-600 font-medium">
                    Crea tu cuenta en Bordex y accede a todas las funcionalidades.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-full md:max-w-[280px] justify-center items-start gap-4 m-4">
              <div className="w-16 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex flex-col items-center justify-center z-10">
                  <FaChartLine className="w-6 h-6 text-blue-950" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:items-start space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Loan Facility</h3>
                  <p className="text-gray-600 font-medium">
                    Crea tu cuenta en Bordex y accede a todas las funcionalidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
