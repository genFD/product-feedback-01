import React from "react";
import GobackButton from "../components/GobackButton";
import { useGlobalContext } from "../context";
import { Tags } from "../data/headerData";

const FeedbackNew = () => {
  const { dropDown, setDropDown, checked, setChecked } = useGlobalContext();

  return (
    <div className="flex flex-col gap-y-9 justify-center items-center pt-10 pb-16 px-6 tablet:pt-14 tablet:pb-56 tablet:px-28 laptop:pt-20 laptop:px-72 laptop:pb-24 desktop:pt-24 desktop:pb-44 desktop:px-450">
      <div className="flex justify-start w-full pl-6">
        <header>
          <GobackButton />
        </header>
      </div>
      <form
        className="bg-white w-full rounded-default h-708 pt-11 pb-6 px-6 relative tablet:pt-12 tablet:pb-10 tablet:px-11 tablet:h-657"
        action=""
      >
        <div className="absolute w-10 h-10 -top-5 flex items-center justify-center rounded-full add_feed_cont_icon tablet:w-14 tablet:h-14 tablet:-top-7">
          <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
            <text
              transform="translate(-24 -20)"
              fill="#F2F4FE"
              fillRule="evenodd"
              fontFamily="Jost-Bold, Jost"
              fontSize="14"
              fontWeight="bold"
            >
              <tspan x="24" y="27.5">
                +
              </tspan>
            </text>
          </svg>
        </div>

        <h2 className="text-heading-3 text-Jewel-Cave font-bold mb-6 tablet:text-heading-1 tablet:mb-10">
          Create New Feedback
        </h2>
        <div className="flex flex-col gap-y-6 mb-10">
          <section className="flex flex-col">
            <h3 className="font-bold tablet:text-heading-4 text-body-3 mb-1 text-Raven-Night">
              Feedback Title
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3 tablet:text-heading-4"
              htmlFor="title"
            >
              Add a short, descriptive headline
            </label>
            <input
              type="text"
              id="title"
              className="h-12 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border"
            />
          </section>

          <section className="flex flex-col">
            <h3 className="font-bold tablet:text-heading-4 text-body-3 mb-1 text-Raven-Night">
              Category
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3 tablet:text-heading-4"
              htmlFor="title"
            >
              Choose a category for your feedback
            </label>
            <div className="custom_select relative">
              <select className="h-12 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border ">
                {Tags.map((item, index) => {
                  return (
                    <option key={index} className="text-body-3 text-Jewel-Cave">
                      {item}
                    </option>
                  );
                })}
              </select>
              <span className="absolute top-0 right-0 h-full rounded-default flex items-center justify-center  bg-Ghost-White block w-16 pointer-events-none">
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
              </span>
            </div>
          </section>

          <section className="flex flex-col">
            <h3 className="font-bold text-body-3 mb-1 text-Raven-Night">
              Feedback Title
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3"
              htmlFor="title"
            >
              Add a short, descriptive headline
            </label>
            <input
              type="text"
              id="title"
              className="h-30 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish tablet:h-24"
            />
            {/* <input
              id="title"
              className=" bg-Ghost-White h-12"
              // value={title}
              // placeholder="title"
              // onChange={}
            /> */}
          </section>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center w-full tablet:flex-row tablet:gap-y-0 tablet:justify-end tablet:gap-x-4">
          <button
            type="button"
            className=" bg-Singapore-Orchid rounded-default w-full h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-36 tablet:order-2"
          >
            Add Feedback
          </button>
          <button
            type="button"
            className="  bg-Raven-Night rounded-default w-full h-11  hover:bg-Kimberlite transition-all duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-24 tablet:order-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default FeedbackNew;
