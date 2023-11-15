"use client";
import React from "react";

type Props = {
  containerClassName?: string;
  text: string;
  onClick?: () => void;
};

export default function Button({ containerClassName, text, onClick }: Props) {
  return (
    <button onClick={onClick} className={containerClassName}>
      <a className="text-xl min[900px]:text-lg">{text}</a>
    </button>
  );
}
