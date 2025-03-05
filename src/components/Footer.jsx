import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 md:px-32 md:py-12 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-10 font-[family-name:var(--font-quicksand)]">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold">
            ¿Qué es Bordex?
          </Link>
          <Link href="/precios" className="text-gray-700 hover:text-blue-600 font-semibold">
            Precios
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-semibold">
            Portafolio
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold">
            Dashboard
          </Link>
        </div>
        <div className="flex space-x-10 mt-4 md:mt-0">
          <Link href="https://facebook.com" className="text-gray-700 hover:text-blue-600">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" className="text-gray-700 hover:text-blue-600">
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" className="text-gray-700 hover:text-blue-600">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-700 hover:text-blue-600">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="text-center b-12 font-semibold text-gray-400">
        &copy; 2025 Desarrollado por <Link className="font-bold font-sans" href={""}>SevenTwo Technology</Link>. Todos los
        derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
