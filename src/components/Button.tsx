import React from "react";

type Props = {
  containerClassName?: string;
  text: string;
};

export default function Button({ containerClassName, text }: Props) {
  return (
    <button className={containerClassName}>
      <a className="hover:text-gray-400 text-xl min[900px]:text-lg" href="mailto:info@quebratech.com.ar">
        {text}
      </a>
    </button>
  );
}
