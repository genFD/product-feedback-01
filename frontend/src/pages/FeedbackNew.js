import React from "react";

const FeedbackNew = () => {
  return (
    <div className="flex flex-col gap-y-9 justify-center items-center pt-10 pb-16 px-6">
      <div className="flex justify-start w-full pl-6">
        <header>
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
        </header>
      </div>
      <form
        className="bg-white w-full rounded-default h-708 pt-11 pb-6 px-6 relative"
        action=""
      >
        <div className="absolute w-10 h-10 -top-5 flex items-center justify-center rounded-full add_feed_cont_icon">
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

        <h2 className="text-heading-3 text-Raven-Night font-bold mb-6">
          Create New Feedback
        </h2>
        <div className="flex flex-col gap-y-6 mb-10">
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
              className="h-12 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border"
            />
            {/* <input
              id="title"
              className=" bg-Ghost-White h-12"
              // value={title}
              // placeholder="title"
              // onChange={}
            /> */}
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
              className="h-12 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border"
            />
            {/* <input
              id="title"
              className=" bg-Ghost-White h-12"
              // value={title}
              // placeholder="title"
              // onChange={}
            /> */}
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
              className="h-30 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border "
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
        <div className="flex flex-col gap-y-4 justify-center items-center w-full">
          <button
            type="button"
            className=" bg-Singapore-Orchid rounded-default w-full h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
          >
            Add Feedback
          </button>
          <button
            type="button"
            className="  bg-Raven-Night rounded-default w-full h-11  hover:bg-Kimberlite transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default FeedbackNew;
