import { CheckCircle } from "lucide-react";

function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-20 lg:py-10 bg-muted">
      <div className="container px-4 mb-1 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="">
            <h2 className="text-4xl mb-4 text-slate-900 font-semibold md:text-4xl/tight">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="inline-block rounded-lg px-3 mb-8 text-md text-gray-600">
              Simplifica la gestión de inventarios con nuestros planes
              flexibles. Encuentra la solución perfecta para tu empresa.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Recuadro 1 */}
          <div className="flex flex-col justify-between rounded-2xl border-[3px] border-blue-500 p-6 shadow-xl hover:border-blue-900 hover:bg-blue-500/10">
            <div className="flex flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-lg text-center font-semibold">Básico</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$49</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Up to 100 crossings per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Basic documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-blue-900 text-white rounded w-auto py-3 hover:bg-blue-700">
              Get Started
            </button>
          </div>
          {/* Recuadro 2 */}
          <div className="flex flex-col justify-between rounded-2xl border-[3px] border-blue-500 p-6 shadow-xl hover:border-blue-900 hover:bg-blue-500/10">
            <div className="flex flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-lg text-center font-semibold ">Estándar</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$149</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Up to 1,000 crossings per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Advanced documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Priority support</span>
                </li>
                
              </ul>
            </div>
            <button
              variant="secondary"
              className="mt-8 bg-blue-900 text-white rounded w-auto py-3 hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
          {/* Recuadro 3 */}
          <div className="flex flex-col justify-between rounded-2xl border-[3px] border-blue-500 p-6 shadow-xl hover:border-blue-900 hover:bg-blue-500/10">
            <div className="flex- flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-lg text-center font-semibold">Pro</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$499</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Unlimited crossings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Complete documentation suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>24/7 dedicated support</span>
                </li>
              
              </ul>
            </div>
            <button className="mt-8 bg-blue-900 text-white rounded w-auto py-3 hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
