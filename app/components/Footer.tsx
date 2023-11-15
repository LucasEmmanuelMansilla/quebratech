"use client";
import Image from "next/image";
import { scrollTop } from "../../utils/scrollViews";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 md:py-8 text-center">
      <div className="mx-auto flex items-center justify-between mx-8">
        <button onClick={scrollTop} className={`h-14 flex items-center justify-center lg:mx-10`}>
          <Image width={40} height={40} className="rounded " src="/icon.jpg" alt="Logo" />
          <p style={{ fontFamily: "Anta" }} className="text-white text-4xl ml-2 max-android:text-lg">
            quebratech
          </p>
        </button>
        <div className="flex justify-between">
          <a href="https://www.linkedin.com/company/quebratech" target="_blank">
            <Image className="" src={"/linkedin.svg"} alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/quebratech_/" target="_blank">
            <Image src={"/instagram.svg"} alt="Instagram" width={40} height={40} />
          </a>
        </div>
      </div>
    </footer>
  );
}
