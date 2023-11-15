import React from "react";
import Carousel from "./Carousel";

export default function ToStart() {
  return (
    <div id="services" className="bg-gray-100 py-10 mt-10">
      <h2 className="text-3xl font-roboto text-secondary text-bold text-center  max-android:px-8 max-android:text-lg text-tertiary">¿Ya sabes por dónde empezar?</h2>
      <div className="flex justify-center flex-col items-center">
        <div className="h-2 my-5 w-72 bg-tertiary rounded-md max-[900px]:w-60 max-[900px]:my-3"></div>
      </div>
      <p className="text-xl text-center text-secondary mt-4 max-android:mx-8 max-android:text-lg">Tenemos las mejores soluciones, herramientas y recursos para ayudarte.</p>
      <Carousel />
    </div>
  );
}
