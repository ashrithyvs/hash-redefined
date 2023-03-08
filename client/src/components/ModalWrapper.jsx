import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalWrapper(props) {
  const { item, ...children } = props;
  console.log(children);
  return (
    <div
      className="hidden w-full bg-slate-900/70 fixed z-50 flex justify-center items-center md:inset-0 h-modal sm:h-full"
      onKeyDown={(e) => {
        if (e.key === "Escape")
          document.getElementById(item.name).classList.toggle("hidden");
      }}
      id={item.name}
    >
      <AiOutlineClose
        size={22}
        color="white"
        onClick={() =>
          document.getElementById(item.name).classList.toggle("hidden")
        }
        className="cursor-pointer absolute right-4 top-4"
      />
      <div className="relative px-4 w-full max-w-[85rem] h-full md:h-auto">
        <div className="relative bg-[#fff] max-w-[85rem] items-center flex rounded-lg shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
