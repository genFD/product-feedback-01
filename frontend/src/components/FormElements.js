import React, { useState } from "react";
import { CgCheck } from "react-icons/cg";

const FormElements = () => {
  const [dropDown, setDropDown] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1 className="text-Raven-Night text-heading-1 mb-4 underline">
        Form Elements
      </h1>
      <div className="flex gap-3">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="w-64 h-12 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border"
          />
        </div>

        <div className="relative">
          <button
            className="flex w-64 h-12 bg-Ghost-White rounded-md justify-between items-center px-4 text-Raven-Night
          active:border-The-Rainbow-Fish active:border"
            onClick={() => setDropDown(!dropDown)}
          >
            <span>Feature</span>

            {!dropDown ? (
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </button>
          {dropDown && (
            <ul className="absolute rounded-default shadow-md w-64 h-60 bg-white flex flex-col  divide-Jewel-Cave divide-opacity-20 divide-y top-19">
              {["Feature", "UI", "UX", "Enhancement", "Bug"].map(
                (item, index) => {
                  return (
                    <li
                      key={index}
                      className="h-1/4 flex justify-between p-3 text-Ocean-Night hover:text-Singapore-Orchid cursor-pointer 
                  transition-colors duration-200
                    "
                    >
                      <button
                        onClick={() => setChecked(!checked)}
                        className="text-body-1 
                  "
                      >
                        {item}
                      </button>
                      <span className="text-Singapore-Orchid">
                        {checked && <CgCheck />}
                      </span>
                    </li>
                  );
                }
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default FormElements;
