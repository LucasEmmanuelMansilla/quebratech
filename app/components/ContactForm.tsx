"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendMail } from "../../utils/sendMail";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const overlay = document.querySelector(".overlay");

    // Mostrar overlay
    overlay?.classList.add("block");

    // Ocultar overlay
    e.preventDefault();
    setLoading(true);
    const res = await sendMail(formData);
    overlay?.classList.remove("block");
    setLoading(false);
    if (res) {
      toast.custom(() => <div className={`bg-tertiary-darker text-white px-6 py-4 mb-10 shadow-md max-tablet:w-80 rounded-lg`}>Consulta recibida. Nos contacteremos contigo a la brevedad</div>);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      toast.custom(() => <div className={`bg-quaternary-darker text-white px-6 py-4 mb-10 shadow-md max-tablet:w-80 rounded-lg`}>Ha ocurrido un error.</div>);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex w-screen max-tablet:px-8">
      <Image src="/Fund_form.png" className="flex max-tablet:absolute max-tablet:right-0 max-tablet:opacity-40 relative " alt="Quebratech" width={700} height={10} />
      <form autoComplete="off" className="rounded-lg min-tablet:relative w-full z-30 min-tablet:right-0 lg:pr-8 mt-4" onSubmit={handleSubmit}>
        <div className="mb-4 w-full min-tablet:w-130 ">
          <label htmlFor="name" className="block text-primary font-bold mb-2">
            Nombre:
          </label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border text-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-primary font-bold mb-2">
            Correo Electrónico:
          </label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border text-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-primary font-bold mb-2">
            Nombre de la Empresa:
          </label>
          <input
            autoComplete="off"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border text-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-primary font-bold mb-2">
            Mensaje:
          </label>
          <textarea
            autoComplete="off"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border text-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none "
            required
          ></textarea>
        </div>
        <div className="flex justify-end my-4 max-android:justify-center">
          <button type="submit" className="bg-primary hover:bg-primary-lighter text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
            Enviar
          </button>
        </div>
      </form>
      {loading && (
        <div className="absolute w-full max-tablet:w-96 z-50 ">
          <div className="flex items-center justify-center mt-40 pointer-events-none">
            <div className="fixed inset-0 bg-black opacity-50 z-50 overlay"></div>
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 max-tablet:w-14 max-tablet:h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-28 z-50 right-8">
        <Toaster toastOptions={{ position: "bottom-center" }} />
      </div>
    </div>
  );
}
