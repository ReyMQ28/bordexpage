import { HiOutlineUsers } from "react-icons/hi2";
import { CheckCircle } from "lucide-react";
import { RiBankLine } from "react-icons/ri";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import Image from "next/image";
// import BotonLeerMas from "@/src/components/BotonLeerMas"

const MiddleSide = () => {
  return (
    <div className=" bg-gray-50">
      {/* MiddleSide */}
      <div>
        <div className="w-full grid grid-cols-4 max-w-[1200px] gap-4 mx-auto bg-white">
          <button className="flex flex-row justify-center items-center gap-2 bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-100 hover:text-blue-400">
            <HiOutlineUsers className="text-xl" />{" "}
            <p className="font-semibold text-lg">Team Scheduling </p>
          </button>
          <button className="flex flex-row justify-center items-center gap-2 py-3 rounded-lg hover:bg-sky-100 hover:text-blue-400">
            <RiBankLine className="text-xl" />{" "}
            <p className="font-semibold text-lg">Payments </p>
          </button>
          <button className="flex flex-row justify-center items-center gap-2 py-3 rounded-lg hover:bg-sky-100 hover:text-blue-400">
            <TbDeviceDesktopCode className="text-xl" />{" "}
            <p className="font-semibold text-lg">Embedding </p>
          </button>
          <button className="flex flex-row justify-center items-center gap-2 py-3 rounded-lg hover:bg-sky-100 hover:text-blue-400">
            <LuNetwork className="text-xl" />{" "}
            <p className="font-semibold text-lg">Workflows</p>
          </button>
        </div>
      </div>

      {/* Recuadros */}
      <div className=" mx-auto grid mb-8 grid-cols-2 max-w-6xl gap-7 py-14">
        <div className=" ">
          {/* Recuadro 1 */}
          <div className="flex flex-col">
            <Image
              src={"https://i.postimg.cc/qv9SqYRg/tabsimage.png"}
              width={550}
              height={550}
              alt="iamgen de graficos"
            />
          </div>
        </div>
        {/* Recuadro 2 */}
        <div className="flex flex-col justify-between p-6 ">
          <div className="flex flex-col text-slate-900">
            <div className="mt-4 flex flex-col">
              <span className="text-5xl font-bold mb-8">Defend your focus</span>
            </div>
            <ul className=" mt-6 space-y-8 font-semibold">
              <li>
                <button className="flex flex-row items-center justify-between gap-2 w-full text-xl font-semibold">
                  <span>Up to 1,000 crossings per month</span>
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </button>
                {/* <BotonLeerMas /> */}
              </li>
              <li>
                <button className="flex flex-row items-center justify-between gap-2 w-full text-xl font-semibold">
                  <span>Up to 1,000 crossings per month</span>
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </button>
              </li>
              <li>
                <button className="flex flex-row items-center justify-between gap-2 w-full text-xl font-semibold">
                  <span>Up to 1,000 crossings per month</span>
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </button>
              </li>
            </ul>
          </div>
          <button
            variant="secondary"
            className="mt-8 bg-sky-500 text-white rounded-full w-32 p-3 px-auto hover:bg-sky-600 "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
