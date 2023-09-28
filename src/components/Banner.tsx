import React, { useEffect, useState } from "react";
import Button from "./Button";

type Props = {
  menuOpen: boolean;
};

export default function Banner({ menuOpen }: Props) {
  const [text, setText] = useState<string>("Empresa");
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    funcSetText();
  }, []);

  const funcSetText = () => {
    const textArray: Array<string> = ["Vida", "Empresa"];
    let currentIndex: number = 0;
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setText(textArray[currentIndex]);
        setShowText(true);
        currentIndex = (currentIndex + 1) % textArray.length;
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  };

  return (
    <section className="bg-cover" style={{ backgroundImage: "url(/photo-1563461660947-507ef49e9c47.svg)" }}>
      <div className={`max-[600px]:w-full min-[600px]:px-8 xl:w-full md:w-full lg:w-full h-150 flex flex-col justify-center bg-banner md:px-10 lg:px-20`}>
        <h1 className="text-3xl lg:text-7xl font-roboto max-[600px]:mx-6 max-w-2xl">Le Damos Valor a Tu</h1>
        <span
          className={`text-3xl lg:text-7xl ${menuOpen ? "hidden" : ""} font-roboto max-[600px]:mx-6 max-w-2xl my-4 text-tertiary transition-opacity duration-500 ${
            showText ? "opacity-90" : "opacity-0"
          }`}
        >
          {text ?? "Empresa"}
        </span>
        <p className="text-2xl mt-4 max-[600px]:mx-6 mt-4">Ayudamos a potenciar tu empresa, desarrollamos tu aplicación movil: ¡Hacemos realidad tus sueños!</p>
        <div className="mt-4 md:w-1/2 lg:w-3/4 mt-6  mt-4 max-[600px]:ml-6 min-[600px]:mt-8">
          <Button containerClassName="bg-tertiary-darker w-40 h-12 hover:bg-secondary-lighter text-white py-2 px-6 mx-auto" text="Contactanos" />
        </div>
      </div>
    </section>
  );
}
