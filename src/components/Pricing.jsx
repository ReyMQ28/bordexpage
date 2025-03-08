import { CheckCircle } from "lucide-react";

function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center py-12 md:py-20 lg:py-10 mb-16 mt-14 justify-center bg-gray-50"
    >
      <div className="container px-4 mb-1 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="">
            <h2 className="text-5xl mb-6 text-slate-900 font-medium md:text-5xl/tight">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="inline-block rounded-lg px-3 mb-8 text-md text-gray-600">
              Simplifica la gestión de inventarios con nuestros planes
              flexibles. Encuentra la solución perfecta para tu empresa.
            </p>
          </div>
        </div>

        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recuadro 1 */}
          <div className="flex flex-col justify-around rounded-2xl h-12/12 bg-white border border-gray-200 p-6 shadow-md hover:border-zinc-30 hover:bg-blue-500/10 select-none">
            <div className="flex flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-xl text-center font-semibold">Básico</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$49</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2 font-semibold mb-8">
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
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Basic documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-blue-600 text-white rounded-full w-auto py-2 hover:bg-blue-500">
              Get Started
            </button>
          </div>
          {/* Recuadro 2 */}
          <div className="flex flex-col justify-around rounded-2xl h-12/12 bg-white border border-gray-200 p-6 shadow-md hover:border-xinc-300 hover:bg-blue-500/10 select-none">
            <div className="flex flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-xl text-center font-semibold ">Estándar</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$149</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2 font-semibold mb-8">
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
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Advanced documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <button
              variant="secondary"
              className="mt-8 bg-blue-600 text-white rounded-full w-auto py-2 hover:bg-blue-500"
            >
              Get Started
            </button>
          </div>
          {/* Recuadro 3 */}
          <div className="flex flex-col justify-around rounded-2xl h-12/12 bg-white border border-gray-200 p-6 shadow-xl hover:border-zinc-300 hover:bg-blue-500/10 select-none">
            <div className="flex- flex-col text-slate-900">
              <div className="space-y-2">
                <h3 className="text-xl text-center font-semibold">Pro</h3>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold">$499</span>
                <span className="ml-1 text-xs text-gray-500">por mes</span>
              </div>
              <ul className="mt-6 space-y-2 font-semibold mb-8">
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
            <button className="mt-8 bg-blue-600 text-white rounded-full w-auto py-2 hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
