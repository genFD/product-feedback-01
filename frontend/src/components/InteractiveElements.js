import React, { useState } from "react";

const InteractiveElements = () => {
  const [dropDown, setDropDown] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="mb-8">
      <h1 className=" font-Jost text-Raven-Night text-heading-1 mb-4 underline">
        Interactive elements
      </h1>
      <div className="flex justify-center gap-4 items-center">
        <div className="vote-tag bg-Cotton-Ball w-10 h-53 flex flex-col items-center justify-center gap-1 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-body-3 text-Jewel-Cave text-center font-bold">
            99
          </span>
        </div>

        <div
          className="ux-tag w-12 h-8 rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish 
        "
        >
          UX
        </div>

        <div className="sort-by-drop-down w-48 h-72 bg-Raven-Night rounded-default flex items-center justify-center gap-2 relative">
          <button
            onClick={() => {
              setDropDown(!dropDown);
              setShowDropDown(!showDropDown);
            }}
            className="text-sort-by text-heading-4 flex items-center justify-center gap-1  text-Cotton-Ball transition-colors duration-200 cursor-pointer"
          >
            <span className="font-light">Sort by :</span>
            <span className="font-bold">Most Upvotes</span>

            {!dropDown ? (
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#ffff"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#ffff"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </button>

          {showDropDown && (
            <ul className="absolute rounded-default shadow-md  w-64 h-48 bg-white flex flex-col  divide-Jewel-Cave divide-opacity-20 divide-y top-20 left-10 ">
              {[
                "Most Upvotes",
                "Least Upvotes",
                "Most Comments",
                "Least Comments",
              ].map((item, index) => {
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
                    {checked && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="11"
                      >
                        <path
                          fill="none"
                          stroke="#AD1FEA"
                          strokeWidth="2"
                          d="M1 5.233L4.522 9 12 1"
                        />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveElements;
