import React from "react";

export default function Presentation() {
  return (
    <div className="lg:mt-24 mt-10">
      <h2 className="text-3xl font-roboto text-tertiary text-center max-[900px]:text-2xl max-android:text-lg">Empresas en la era digital</h2>
      <div className="flex justify-center flex-col items-center">
        <div className="h-2 my-5 w-72 bg-tertiary rounded-md max-[900px]:w-60 max-[900px]:my-3"></div>
        <span className="font-roboto text-secondary text-center text-2xl mt-10 mx-28 max-android:mx-8">
          Nadie imaginaba que en marzo del 2020 la atención de la gente estaría tan centrada en lo digital, investigando en sitios web, interactuando en redes sociales, comprando y trabajando en un
          entorno 100% online. Este es el momento ideal para comprender el comportamiento del consumidor, adaptar su negocio y empezar a invertir en digitalizar su empresa.
        </span>
        <span className="font-roboto text-secondary text-center text-2xl mt-20 mx-28 max-android:mx-8">
          Ante esta nueva realidad, y en tiempos de incertidumbre sobre el futuro, debemos mantener la calma para tomar decisiones de forma estructurada y consciente, buscando así evitar decisiones
          apresuradas y desesperadas que pueden perjudicar a sus empleados y comprometer el futuro de tu negocio.
        </span>
      </div>
    </div>
  );
}
