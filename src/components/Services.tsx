import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-cover flex flex-wrap">
      <div className="w-full md:w-1/2 py-10 md:py-20 pl-5 md:pl-10" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-md px-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Creamos tu aplicación móvil híbrida desde cero</h1>
          <p className="text-base text-gray-500">
            Desarrollamos aplicaciones móviles con tecnologías híbridas utilizando metodologías ágiles para destacar las características clave de tu empresa y fortalecer tu propuesta de valor.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-10 md:py-20 pl-5 md:pl-10">
        <div className="max-w-md  px-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Mantenemos tu aplicación móvil existente</h1>
          <p className="text-base text-gray-500 mb-4">Si tenés una aplicación y querés darle un nuevo enfoque o simplemente querés actualizarla, nosotros podemos ayudarte.</p>
          <p className="text-base text-gray-500">Nuestra metodología está armada para alinearse perfectamente con tus productos ya existentes y adaptarla a tus nuevas necesidades</p>
        </div>
      </div>
    </section>
  );
}
