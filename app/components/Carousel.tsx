import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div className="flex justify-around mt-10 max-tablet:flex-col max-tablet:items-center">
      <div className="bg-tertiary-darker min-android:h-140 w-120 p-8 rounded-lg max-tablet:w-80">
        <Image src="/building.svg" alt="Building" width={60} height={20} />
        <p className="mt-4">CREAMOS TU APLICACIÓN</p>
        <p className="mt-2">
          Nos especializamos en la creación de aplicaciones móviles a medida. Nuestro equipo de desarrolladores te guiará desde la concepción de la idea hasta el lanzamiento en las tiendas de
          aplicaciones.
        </p>
      </div>
      <div className="bg-primary min-android:h-140 w-120 p-8 rounded-lg max-tablet:w-80 max-tablet:mt-8">
        <Image src="/Setting.svg" alt="Setting" width={60} height={20} />
        <p className="mt-4">AUMENTAMOS LA VISIBILIDAD DE TU MARCA</p>
        <p className="mt-2">
          Estamos preparados para ayudarte a mejorar la visibilidad de tu empresa de manera efectiva y sostenible. Contamos con un equipo de expertos en marketing y estrategia digital que trabajará
          contigo para impulsar tu presencia en línea.
        </p>
      </div>
    </div>
  );
}
