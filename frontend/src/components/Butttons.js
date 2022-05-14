import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="mb-8 ">
      <h1 className="text-Raven-Night text-heading-1 mb-4 underline">
        Buttons
      </h1>
      <div className="flex gap-x-8 items-center justify-center">
        <button
          type="button"
          className=" bg-Singapore-Orchid rounded-default w-40 h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
        >
          Button 1
        </button>
        <button
          type="button"
          className=" bg-The-Rainbow-Fish rounded-default w-40 h-11 hover:bg-Orchid transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
        >
          Button 2
        </button>
        <button
          type="button"
          className="  bg-Raven-Night rounded-default w-40 h-11  hover:bg-Kimberlite transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
        >
          Button 3
        </button>
        <button
          type="button"
          className=" bg-Blood-Moon rounded-default w-40 h-11 hover:bg-Steamed-Salmon transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
        >
          Button 4
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-x-1 hover:underline transition-all duration-500 decoration-Ocean-Night text-heading-4"
        >
          <MdKeyboardArrowLeft style={{ color: "#4661E6" }} />
          <span className="text-Ocean-Night">Go back</span>
        </button>
        <button
          type="button"
          className=" bg-Raven-Night rounded-default w-40 h-14 flex items-center justify-center gap-x-1 hover:underline transition-all duration-500 decoration-white text-heading-4"
        >
          <MdKeyboardArrowLeft style={{ color: "#CDD2EE" }} />
          <span className="text-white">Go back</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
