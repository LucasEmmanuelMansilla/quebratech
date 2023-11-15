"use client";
import Button from "./Button";
import Image from "next/image";
import { ASK_US_HOW, CONTACT_BUTTON, FIRST_TITLE, SECOND_TITLE } from "../../utils/constants";
import { scrollToForm } from "../../utils/scrollViews";

export default function Banner() {
  return (
    <section className="mb-4 md:mb-8 lg:mb-12 xl:mb-16">
      <div className={`z-40 lg:px-10 pt-2 lg:flex-row flex justify-between items-center bg-primary relative min-tablet:px-6 pt-14 lg:pt-28 h-150`}>
        <div className="flex flex-col mb-8 sm:ml-8">
          <div className="mt-2 mb-8 max-tablet:flex max-tablet:justify-center">
            <h1 className="lg:text-2xl font-bold font-roboto absolute mb-4 max-tablet:text-center max-tablet:mx-8 ">
              {FIRST_TITLE} {SECOND_TITLE}
            </h1>
          </div>
          <div>
            <h2 className="text-xl max-tablet:text-center md:text-sm font-roboto mt-10 max-tablet:text-sm">{ASK_US_HOW}</h2>
          </div>
          <div className="max-tablet:justify-center flex mt-10 w-screen">
            <Button
              onClick={scrollToForm}
              text={CONTACT_BUTTON}
              containerClassName="bg-tertiary-darker text-white max-tablet:w-auto max-tablet:h-auto rounded-md p-4 max-tablet:py-2 max-tablet:justify-center flex"
            />
          </div>
        </div>
        <div className="hidden lg:flex absolute right-20 top-2">
          <Image src={"/banner.svg"} className="min-[900px]:mr-10 mt-28 " alt="Quebratech" width={405} height={10} />
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center w-full">
        <div className="triangleLeft"></div>
        <div className="triangleRight w-full relative"></div>
      </div>
    </section>
  );
}
