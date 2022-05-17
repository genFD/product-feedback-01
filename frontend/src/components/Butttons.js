import React from "react";

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
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-Ocean-Night">Go back</span>
        </button>
        <button
          type="button"
          className=" bg-Raven-Night rounded-default w-40 h-14 flex items-center justify-center gap-x-2 hover:underline transition-all duration-500 decoration-white text-heading-4"
        >
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#CDD2EE"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-white">Go back</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
