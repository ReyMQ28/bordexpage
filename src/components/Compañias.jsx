import React from "react";
import Link from "next/link";
import Image from "next/image";

const Compañias = () => {
  return (
    <div className="bg-white flex flex-wrap justify-around items-center p-4 sm:p-8 md:p-12">
      <Link href="https://example.com/link4">
        <Image 
          src="https://i.postimg.cc/tCy5sPJB/UDD-negro.png"
          alt="Logo 4"
          width={100}
          height={10}
          className="h-12"
        />
      </Link>
      <Link href="https://example.com/link1">
        <Image
          src="https://i.postimg.cc/y6GQWW95/0-inditex-d1200x670.png"
          alt="Logo 1"
          width={120}
          height={30}
          className="h-12"
        />
      </Link>
      <Link href="https://example.com/link4">
        <Image
          src="https://i.postimg.cc/s23KbWdB/LETRAGRAMA-NEGRO-scaled.png"
          alt="Logo 4"
          width={120}
          height={56}
          className="h-12"
        />
      </Link>
      <Link href="https://example.com/link3">
        <Image
          src="https://i.postimg.cc/28BHWm75/Iso-negro-f-blanco.png"
          alt="Logo 3"
          width={120}
          height={112}
          className="h-12"
        />
      </Link>
      <Link href="https://example.com/link5">
        <Image
          src="https://i.postimg.cc/BvZkHkvw/logo-hyflex-negro.png"
          alt="Logo 5"
          width={120}
          height={60}
          className="w-18"
        />
      </Link>
    </div>
  );
};

export default Compañias;
