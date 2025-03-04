"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white flex items-center justify-between p-1 shadow-md select-none rounded-full m-2 fixed  lg:left-10 w-11/12 z-50  top-0 left-0  ${
        isScrolled
          ? "mt-2 bg-white/20 backdrop-blur-md border-b border-white/30"
          : ""
      }`}
    >
      <div className="text-xl font-bold ml-4 md:ml-28 cursor-pointer">
        <Link href="/">
          <Image
            src={"https://i.postimg.cc/8kfcxvVR/logo-bordex.png"}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav
        className={`hidden md:flex space-x-6 ml-12 ${isScrolled ? " " : ""}`}
      >
        <Link href="/" className="hover:text-blue-600 font-semibold px-2">
          Inicio
        </Link>
        <Link href="" className="hover:text-blue-600 font-semibold px-2">
          ¿Qué es Bordex?
        </Link>
        <Link
          href="/pricing"
          className="hover:text-blue-600 font-semibold px-2"
        >
          Precios
        </Link>
        <Link href="" className="hover:text-blue-600 font-semibold px-2">
          Portafolio
        </Link>
        <Link href="" className="hover:text-blue-600 font-semibold px-2">
          Dashboard
        </Link>
      </nav>
      <div className="hidden md:flex space-x-4 mr-6 font-semibold">
        <button className="rounded-full px-4 py-2 flex items-center justify-center gap-2 flex-rows border-2 border-black  hover:bg-blue-600 hover:text-white hover:border-transparent">
          <Link href={`/contactanos`}>Contáctanos</Link>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <div className="md:hidden mr-4">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full z-20 bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-semibold"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              href=""
              className="text-gray-700 hover:text-gray-900 font-semibold"
              onClick={closeMenu}
            >
              Sobre Mi
            </Link>
            <Link
              href=""
              className="text-gray-700 hover:text-gray-900 font-semibold"
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link
              href={`/contactanos`}
              className="text-gray-700 hover:text-gray-900 font-semibold"
              onClick={closeMenu}
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
