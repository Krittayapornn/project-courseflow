import React from "react";
import { useState } from "react";

const Buttons = () => {
  const [active, setActive] = useState("b1"); // b1 = button1, b2 = button2, etc...

  return (
    <div className="flex lg:pl-[4rem] lg:pb-[2rem]">
      <button
        className={`w-28  transition-colors duration-300 ease-in-out ${
          active === "b1"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => setActive("b1")}
      >
        All courses
      </button>
      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b2"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => setActive("b2")}
      >
        In progress
      </button>
      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b3"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => setActive("b3")}
      >
        Completed
      </button>
    </div>
  );
};

export default Buttons;
