import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ProjectsModal({ item }) {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div
      className="hidden w-full bg-slate-900/70 fixed z-50 flex justify-center items-center md:inset-0 h-modal sm:h-full"
      id={item.name}
    >
      <div className="relative px-4 w-full max-w-[85rem] h-full md:h-auto">
        <div className="relative bg-[#fff] max-w-[85rem] items-center flex flex-col rounded-lg shadow-xl">
          <AiOutlineClose
            size={22}
            color="white"
            onClick={() =>
              document.getElementById(item.name).classList.toggle("hidden")
            }
            className="cursor-pointer absolute right-4 top-4"
          />{" "}
          <div className="min-h-full min-w-full  bg-slate-900 flex space-x-4 p-6 items-center overflow-x-scroll">
            <AiOutlineLeft
              className={` ${
                currentItem === 0
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-pointer"
              }`}
              onClick={() =>
                setCurrentItem((prev) => (prev !== 0 ? prev - 1 : prev))
              }
              size={32}
            />
            <img src={item.images[currentItem]} className="w-[90%]" />
            <AiOutlineRight
              className={` ${
                currentItem === item.images.length - 1
                  ? "hover:cursor-not-allowed "
                  : "hover:cursor-pointer"
              }`}
              onClick={() =>
                setCurrentItem((prev) =>
                  prev !== item.images.length - 1 ? prev + 1 : prev
                )
              }
              size={32}
            />
          </div>
          <div className="flex min-h-1/4 space-x-4 bg-slate-900 w-full pb-6 items-center justify-center">
            {item.images.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentItem(idx);
                  }}
                  className={`w-[15px] h-[15px] transition duration-300 rounded-full ${
                    currentItem === idx
                      ? "bg-[#9333ea] hover:bg-[#6c12c0]"
                      : "bg-white hover:bg-[#9333ea]"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
