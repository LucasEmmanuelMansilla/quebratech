import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";

type Props = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ menuOpen, setMenuOpen }: Props) => {
  const [scrollBlocked, setScrollBlocked] = useState<boolean>(false);

  const checkIfElementVisible = () => {
    const element: HTMLElement | null = document.getElementById("header");
    if (element) {
      const rect: DOMRect = element.getBoundingClientRect();
      if (rect.top >= 0) {
        setScrollBlocked(true);
      } else {
        setScrollBlocked(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkIfElementVisible);
    return () => {
      window.removeEventListener("scroll", checkIfElementVisible);
    };
  }, []);

  // Aplica el estilo para bloquear el scroll
  useEffect(() => {
    if (scrollBlocked && menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollBlocked, menuOpen]);

  return (
    <header id="header" className="sticky top-0 bg-white z-10">
      <div className="container mx-auto h-full flex justify-between z-10 items-center px-6">
        <div className={`w-10 h-10 rounded flex items-center justify-center ${menuOpen ? "hidden" : ""}`}>
          <Image width={150} height={150} className="rounded ml-28" src="/icon.jpg" alt="Logo" />
          <p style={{ marginLeft: "10px", fontFamily: "Anta" }} className="text-primary text-4xl">
            quebratech
          </p>
        </div>
        <nav className={`lg:flex ${menuOpen ? "block" : "hidden"} ${!menuOpen ? "lg:flex" : ""} lg:space-x-10  max-[900px]:pt-14 `}>
          <ul
            className={`lg:flex ${
              menuOpen ? "flex-col" : "space-x-10"
            } items-center max-[900px]:absolute max-[900px]:right-0 sm:z-10 max-[900px]:bg-white max-[900px]:px-2 max-[900px]:py-2 max-[900px]:w-screen max-[900px]:h-screen`}
          >
            <li className="max-[900px]:mb-10">
              <a href="#" className="text-primary hover:text-gray-300 max-[900px]:text-3xl">
                Inicio
              </a>
            </li>
            <li className="max-[900px]:mb-10">
              <a href="#" className="text-primary hover:text-gray-300 max-[900px]:text-3xl">
                Servicios
              </a>
            </li>
            <li className="max-[900px]:mb-10">
              <a href="#" className="text-primary hover:text-gray-300 max-[900px]:text-3xl">
                Portafolio
              </a>
            </li>
            <li className="max-[900px]:mb-10">
              <a href="#" className="text-primary hover:text-gray-300 max-[900px]:text-3xl">
                Sobre nosotros
              </a>
            </li>
          </ul>
          <Button text="Contactanos" containerClassName="bg-primary-darker hover:bg-secondary-lighter text-white py-2 px-6" />
        </nav>
        <div className="lg:hidden absolute right-4 top-7">
          <button
            className="text-primary text-lg"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setScrollBlocked(!scrollBlocked);
            }}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
