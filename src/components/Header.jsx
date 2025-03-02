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
      className={`bg-white flex items-center justify-between p-1 shadow-md select-none  ${
        isScrolled
          ? "mt-2 rounded-full m-5 fixed top-0 lg:left-10 w-11/12 z-50"
          : ""
      }`}
    >
      <div className="text-xl font-bold ml-4 md:ml-28 cursor-pointer">
        <Link href="/">
          <Image
            src={"https://i.postimg.cc/KYMf5fYw/Icon-Invordex.png"}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-10 ml-12">
        <Link
          href="/"
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Inicio
        </Link>
        <Link
          href=""
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Sobre Mi
        </Link>
        <Link
          href=""
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Pricing
        </Link>
        <Link
          href=""
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Portafolio
        </Link>
        <Link
          href=""
          className="text-gray-700 hover:text-gray-900 font-semibold"
        >
          Dashboard
        </Link>
      </nav>
      <div className="hidden md:flex space-x-4 mr-6 font-semibold">
        <button className="rounded-full px-4 py-2 flex items-center justify-center gap-2 flex-rows border-2 border-gray-700 text-gray-700 hover:bg-orange-500">
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
              href={`/unete`}
              className="text-gray-700 hover:text-gray-900 font-semibold"
              onClick={closeMenu}
            >
              Únase a Nosotros
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
