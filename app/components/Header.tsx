"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { scrollToForm, scrollToServices, scrollTop } from "../../utils/scrollViews";

const Header = () => {
  const [scrollBlocked, setScrollBlocked] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Inicio");

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

  useEffect(() => {
    if (scrollBlocked && menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollBlocked, menuOpen]);

  const liStyles: string = ` ${menuOpen && "bg-white"} items-center justify-center flex w-full h-14 px-6 rounded-b-lg`;
  const aStyles: string = `${menuOpen && "bg-white text-primary"} text-neutral-lighter max-[900px]:text-2xl`;

  return (
    <header id="header" className={`${menuOpen && "bg-white"} bg-primary  `}>
      <div className="flex justify-between items-center  max-tablet:justify-center fixed top-0 left-0 w-screen bg-primary z-50 ">
        <button onClick={scrollTop} className={`h-14 flex items-center justify-center ${menuOpen ? "hidden" : ""} lg:mx-14`}>
          <Image width={40} height={40} className="rounded " src="/icon.jpg" alt="Logo" />
          <p style={{ fontFamily: "Anta" }} className="text-white text-4xl ml-2">
            quebratech
          </p>
        </button>
        <nav className={`lg:flex ${menuOpen ? "block" : "hidden"} ${!menuOpen ? "lg:flex" : ""} lg:space-x-10 max-tablet:hidden mr-8`}>
          <ul
            className={`lg:flex ${
              menuOpen ? "flex-col" : ""
            } items-center max-[900px]:absolute max-[900px]:right-0 max-[900px]:bg-white max-[900px]:px-2 max-[900px]:py-2 max-[900px]:w-screen max-[900px]:h-screen`}
          >
            <li className={`${selected === "Inicio" && "bg-tertiary"} ${liStyles}`}>
              <button
                onClick={() => {
                  setSelected("Inicio");
                  scrollTop();
                }}
                className={`${selected !== "Inicio" && "hover:text-tertiary"} ${aStyles}`}
              >
                Inicio
              </button>
            </li>
            <li className={`${selected === "Servicios" && "bg-tertiary"} ${liStyles}`}>
              <button
                onClick={() => {
                  setSelected("Servicios");
                  scrollToServices();
                }}
                className={` ${selected !== "Servicios" && "hover:text-tertiary"} ${aStyles}`}
              >
                Servicios
              </button>
            </li>
            <li className={`${selected === "Contacto" && "bg-tertiary"} ${liStyles}`}>
              <button
                onClick={() => {
                  setSelected("Contacto");
                  scrollToForm();
                }}
                className={`text-neutral-lighter ${selected !== "Contacto" && "hover:text-tertiary"} max-[900px]:text-3xl`}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
